//Connexion à la BDD
const conn = require('../middleware/mysql');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken');

// Middleware d'ajout d'un like  
exports.likePost = (req, res, next) => {
    // const token = req.headers.authorization.split(' ')[1];
    // const decodedToken = jwt.verify(token, process.env.TOKEN);
    // const userId = decodedToken.userId;
    // const messageId = decodedToken.messageId;

    // // condition userID et rôle admin
    // if (!userId && !messageId) {
    //     return res.status(401).json({ message: 'Vous ne pouvez pas effectuer cette action' })
    // }
    
// TODO
    conn.query(
        'INSERT INTO likes SET ?', req.body,
        (error, results, fields) => {
        if (error) {
            return res.status(400).json(error)
        }
            return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
    })
};
