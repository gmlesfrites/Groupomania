//Connexion à la BDD
const conn = require('../middleware/mysql');

// Middleware de création d'un message
exports.createMessage = (req, res, next) => {
    const message = req.body;
    const title = req.body.title;
    const content = req.body.content;

    //condition titre et contenu obligatoires
    if (title === null || content === null) {
        return res.status(400).json({message: "Pour être valide, votre publication doit contenir un titre et un contenu."})
    }

    //condition longueur titre et contenu
    if (title.length < 5  || content.length < 5) {
        return res.status(400).json({message: "Ce que vous postez doit contenir minimum 5 caractères !"})
    }

    //insertion BDD
    conn.query(
        'INSERT INTO messages SET ?', message, 
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
}

// Middleware de réponse à un message
exports.answerMessage = (req, res, next) => {
    const message = req.body;
    const title = req.body.title;
    const content = req.body.content;
    const messageId = req.body.id;

    //condition titre et contenu obligatoires
    if (title === null || content === null) {
        return res.status(400).json({message: "Pour être valide, votre publication doit contenir un titre et un contenu."})
    }

    //condition longueur titre et contenu
    if (title.length < 5  || content.length < 5) {
        return res.status(400).json({message: "Ce que vous postez doit contenir minimum 5 caractères !"})
    }

    if (messageId) {
        //insertion BDD
        conn.query(
            'INSERT INTO messages SET ?', message, 
            (error, results, fields) => {
                if (error) {
                    return res.status(400).json(error)
                }
                return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
    }
}

// Middleware de suppresion d'un message
exports.deleteMessage = (req, res, next) => {
    const deleteMessage = req.params.id;
    conn.query(
        // 'SELECT users.id, users.isAdmin FROM users UNION SELECT messages.id, messages.userId FROM messages',
        'SELECT * FROM messages WHERE id=?', deleteMessage,
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            const messageId = results[0].userId;
            const messageToDelete = req.body.userId;

            const admin = results[0].isAdmin;

            //condition userId et rôle
            if (messageId != messageToDelete)  {
                return res.status(401).json({ message: 'Vous ne pouvez pas effectuer cette action '})
            }
            
            //suppression de la BDD
            conn.query(
                `DELETE FROM messages WHERE id= ?`, req.params.id,
                (error, results, fields) => {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                    .status(200)
                    .json({ message: 'Le message a bien été supprimé !' })
                }
            )
        }
    )
}

// Middleware de mise à jour d'un message
exports.updateMessage = (req, res, next) => {
    const update = req.params.id;

    conn.query(
        'SELECT * FROM messages WHERE id=?', update,
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            const messageId = results[0].userId;
            const messageToSend = req.body.userId;
   
            //condition userId identique à celui du message initial userI à remettre
            if (messageId == messageToSend ) {
                
                // MAJ en BDD
                const updatedMessage = req.body;
                conn.query(
                    'UPDATE messages SET ? WHERE id=?',
                    [updatedMessage, req.params.id],
                    (error, results, fields) => {
                        if (error) {
                            return res.status(400).json(error)
                        }
                        return res
                        .status(200)
                        .json({ message: 'Le message a bien été modifié !' })
                    }
                )
            } else {
                return res.status(401).json({ message: "Seul l'auteur de la publication peut modifier son message ! "})
            }
        }
    )
}

// Middleware pour afficher tous les messages
exports.getAllMessages = (req, res, next) => {
    conn.query(
        // affichage date de création, titre, contenu, likes, userId du plus récent au plus ancien
        'SELECT DATE_FORMAT(createdAt,\"%d/%m/%Y %H:%i\") AS "date", title, content, userId FROM development_groupomania.messages ORDER BY createdAt DESC LIMIT 20',
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de message trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}
