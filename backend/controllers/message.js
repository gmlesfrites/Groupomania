//Connexion à la BDD
const conn = require('../middleware/mysql');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken');

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

    //condition titre et contenu non vide
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
            return res.status(201).json({ message: 'Votre réponse a bien été postée !' })
    })
}

// Middleware de suppresion d'un message
exports.deleteMessage = (req, res, next) => {
    conn.query(
        'SELECT * FROM messages WHERE id=?', req.params.id,
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
        
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env.TOKEN);
            const userId = decodedToken.userId;
            const role = decodedToken.role;
            const messageId = results[0].userId;
            
            //condition userId et rôle
            if (userId !== messageId && role === 'admin') {
                return res.status(401).json({ message: 'Vous ne pouvez pas effectuer cette action' })
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
    const id = req.params.id;

    conn.query(
        'SELECT * FROM messages WHERE id=?', id,
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env.TOKEN);
            const userId = decodedToken.userId;
            const messageId = results[0].userId;
            const role = decodedToken.role;
        
            // condition userID et rôle admin
            if (userId !== messageId && !role === 'admin') {
                return res.status(401).json({ message: 'Vous ne pouvez pas effectuer cette action' })
            }
        
            // MAJ en BDD
            const updatedMessage = req.body;
            conn.query('UPDATE messages SET ? WHERE id=?',
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
        }
    )
}

// Middleware pour afficher tous les messages
exports.getAllMessages = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.TOKEN)
    const userId = decodedToken.userId
        
    conn.query(
        // TODO affichage date de création, titre, contenu, likes, du plus récent au plus ancien
        'SELECT DATE_FORMAT(createdAt,\"%d/%m/%Y %H:%i\") AS "date", title, content FROM development_groupomania.messages ORDER BY createdAt DESC LIMIT 20',
// DATE_FORMAT(createdAt,\"%d/%m/%Y %H:%i\)"AS "date"
// COUNT (likes.id) AS "userLike", COUNT (likes.id) AS "messageLike", 
// LEFT JOIN messageLike ON messages.id = likes.messageId AND userLike.id = likes.userId =?
        // 'SELECT DATE_FORMAT(createdAt,\"%d/%m/%Y %H:%i\") AS "date", title, content FROM development_groupomania.messages ORDER BY createdAt DESC LIMIT 20',
        [userId],
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de message trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}