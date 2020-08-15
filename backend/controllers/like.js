//Connexion à la BDD
const conn = require('../middleware/mysql');

// Middleware d'ajout d'un like  fonctionne mais permet de voter plusieurs fois
exports.likePost = (req, res, next) => {
    const like = req.body;

    conn.query(
        'INSERT INTO likes SET ?', like,
        (error, results, fields) => {
        if (error) {
            return res.status(400).json(error)
        }
            return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
    })
};

//Middleware pour récupérer tous les likes
exports.getAllLikes = (req, res, next) => {
    conn.query(
        // affichage date de création, titre, contenu, likes, userId du plus récent au plus ancien
        'SELECT * FROM development_groupomania.likes',
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de message trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}




