//Connexion à la BDD
const conn = require('../middleware/mysql')

// création d'un message  http://localhost:3000/api/message/create
exports.createMessage = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    if (title === null || content === null) {
        return res.status(400).json({message: "Pour être valide, votre publication doit contenir un titre et un contenu."})
    }

    if (title.length < 5  || content.length < 5) {
        return res.status(400).json({message: "Ce que vous postez doit contenir minimum 5 caractères !"})
    }
    
    const message = req.body
    
    conn.query('INSERT INTO messages SET ?', message, (error, results, fields) => {
      if (error) {
        return res.status(400).json(error)
      }
      return res.status(201).json({ message: 'Votre message a bien été posté !' })
    })
}

// Afficher tous les messages    http://localhost:3000/api/message
exports.getAllMessages = (req, res, next) => {
    conn.query(
        // affichage date de création, titre, contenu, likes, du plus récent au plus ancien
        'SELECT createdAt, title, content, likes FROM development_groupomania.messages ORDER BY createdAt DESC LIMIT 20',
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de message trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}