//Connexion à la BDD
const conn = require('../middleware/mysql')

// Middleware d'ajout d'un like  
exports.likePost = (req, res, next) => {
  const like = req.body;
  
  conn.query('INSERT INTO development_groupomania.likes SET ?', like, (error, results, fields) => {
    if (error) {
        return res.status(400).json(error)
    }
    return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
  })
}

// Middleware d'ajout d'un dislike  
exports.dislikePost = (req, res, next) => {
  const dislike = req.body;
  
  conn.query('INSERT INTO development_groupomania.likes SET ?', dislike, (error, results, fields) => {
    if (error) {
        return res.status(400).json(error)
    }
    return res.status(201).json({ message: 'Votre dislike a bien été ajouté !' })
  })
}