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
router.post('/create',  multer, messageControllers.createMessage);

// //route pour afficher toutes les messages
router.get('/', authentication, messageControllers.getAllMessages);

module.exports = router;