//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//Nécessite le multer pour gestion des fichiers multimédias
const multer = require ('../middleware/multer-config');

//nécessite le fichier post du dossier controllers
const messageControllers = require('../controllers/message');

//route pour créer un post
router.post('/', authentication, multer, messageControllers.createMessage);

//route pour modifier les posts par id
router.put('/:id', authentication, multer, messageControllers.modifyMessage);

//route pour supprimer les posts par id
router.delete('/:id', authentication, messageControllers.deleteMessage);

//route pour afficher les posts par id
router.get('/:id', authentication, messageControllers.createOneMessage);

//route pour afficher toutes les sauces
router.get('/', authentication, messageControllers.createMessages);

//route pour 'like/dislike'
router.post('/:id/like', authentication, messageControllers.messageLikeOrDislike);

module.exports = router;