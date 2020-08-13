//Connexion à la BDD
const conn = require('../middleware/mysql');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken');

// Middleware d'ajout d'un like  
exports.likePost = (req, res, next) => {
    const like = req.body;

    conn.query(
        'INSERT INTO likes SET ?', like, req.params.id, (error, results, fields) => {
        if (error) {
            return res.status(400).json(error)
        }
            return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
    })
}
