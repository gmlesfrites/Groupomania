//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//nécessite le fichier like du dossier controllers
const likeControllers = require('../controllers/like');

// route pour poster un like
// http://localhost:3000/like
router.post('/', authentication, likeControllers.likePost);

module.exports = router;