//Connexion à la BDD
const conn = require('../middleware/mysql');

// Middleware d'ajout d'un like  fonctionne mais permet de voter plusieurs fois
exports.likePost = (req, res, next) => {
    const like = req.body;
    const userId = req.body.userId;
    const messageId = req.body.messageId;

    conn.query(
        'SELECT * FROM likes WHERE userId AND messageId', 
        (error, results, fields) => {
        if (!userId || !messageId) {
            return res.status(401).json ({message :'il faut être utilisateur et avoir un message à liker '});
        } else if (userId === messageId) {
            return res.status(400).json({message : 'Euh... vous avez déjà vôté'})
        } else {

            conn.query(
                'INSERT INTO likes SET ?', like,
                (error, results, fields) => {
                if (error) {
                    return res.status(400).json(error)
                }
                    return res.status(201).json({ message: 'Votre like a bien été ajouté !' })
            })
        }
    }
    )
};

//Middleware pour récupérer tous les likes
exports.getAllLikes = (req, res, next) => {
    conn.query(
        'SELECT * FROM development_groupomania.likes',
        (error, results, fields) => {
            if (error) {
                return res.status(404).json({ message: " Pas de like trouvé !"})
            }
            return res.status(200).json({ results })
        }
    )
}




