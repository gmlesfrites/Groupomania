//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//Nécessite le multer pour gestion des fichiers multimédias
const multer = require ('../middleware/multer-config');

//nécessite le fichier post du dossier controllers
const postControllers = require('../controllers/discussion');

//route pour créer un post
router.post('/', authentication, multer, postControllers.createPost);

//route pour modifier les posts par id
router.put('/:id', authentication, multer, postControllers.modifyPost);

//route pour supprimer les posts par id
router.delete('/:id', authentication, postControllers.deletePost);

//route pour afficher les posts par id
router.get('/:id', authentication, postControllers.createOnePost);

//route pour afficher toutes les sauces
router.get('/', authentication, postControllers.createPosts);

//route pour 'like/dislike'
router.post('/:id/like', authentication, postControllers.postLikeOrDislike);

module.exports = router;