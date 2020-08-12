//Connexion à la BDD
const conn = require('../middleware/mysql')

// création d'un message  http://localhost:3000/api/message/create
exports.likePost = (req, res, next) => {
  const like = req.body;
  
  conn.query('INSERT INTO development_groupomania.likes SET ?', like, (error, results, fields) => {
    if (error) {
        return res.status(400).json(error)
    }
    return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
  })
}
