//Connexion à la BDD
const conn = require('../middleware/mysql')

// Middleware d'ajout d'un like  
exports.likePost = (req, res, next) => {
  const like = req.body;
let privilege = ''
if (results[0].isAdmin === 1) {
privilege = 'admin'
} else {
privilege = 'member'
}


  conn.query('INSERT INTO development_groupomania.likes SET ?', like, (error, results, fields) => {
    if (error) {
        return res.status(400).json(error)
    }
    return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
  })
}