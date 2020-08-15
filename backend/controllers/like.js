//Connexion à la BDD
const conn = require('../middleware/mysql');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken');

// Middleware d'ajout d'un like  
exports.likePost = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const userId = decodedToken.userId;

    const like = req.body;

    if (userId === messageId) {
        conn.query(
            'SELECT * FROM likes WHERE messageId', [like],
            (error, results, fields) => {
                if (results) {
                    return res.status(401).json({ message: 'Vous avez déjà vôté' }) 
                } else {
                    conn.query(
                        'INSERT INTO likes SET ?', [like],
                        (error, results, fields) => {
                        if (error) {
                            return res.status(400).json(error)
                        }
                            return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
                    })
                }
            }   
        ) 
    } else {
        res
        .status(500)
        .json({ error })
    }
};


//Middleware pour récupérer tous les likes
exports.getAllLikes = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, process.env.TOKEN)
    const userId = decodedToken.userId
        
    conn.query(
        // affichage date de création, titre, contenu, likes, userId du plus récent au plus ancien
        'SELECT * FROM development_groupomania.likes',
        userId,
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de message trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}




// // Middleware d'ajout d'un like  fonctionne mais permet de voter plusieurs fois
// exports.likePost = (req, res, next) => {
//     const like = req.body;

//     conn.query(
//         'INSERT INTO likes SET ?', like,
//         (error, results, fields) => {
//         if (error) {
//             return res.status(400).json(error)
//         }
//             return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
//     })
// };