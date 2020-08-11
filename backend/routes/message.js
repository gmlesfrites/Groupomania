//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//Nécessite le multer pour gestion des fichiers multimédias
const multer = require ('../middleware/multer-config');

//nécessite le fichier message du dossier controllers
const messageControllers = require('../controllers/message');

// //route pour créer un message
// router.post('/', authentication, multer, messageControllers.createMessage);

// //route pour modifier les messages par id
// router.put('/:id', authentication, multer, messageControllers.modifyMessage);

// //route pour supprimer les messages par id
// router.delete('/:id', authentication, messageControllers.deleteMessage);

// //route pour afficher les messages par id
// router.get('/:id', authentication, messageControllers.createOneMessage);

// //route pour afficher toutes les messages
// router.get('/', authentication, messageControllers.createMessages);

// //route pour 'like/dislike'
// router.post('/:id/like', authentication, messageControllers.messageLikeOrDislike);

module.exports = router;