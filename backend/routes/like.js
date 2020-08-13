//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//nécessite le fichier like du dossier controllers
const likeControllers = require('../controllers/like');

// route pour poster un like/dislike
// http://localhost:3000/:id/like
router.post('/:id/like', authentication, likeControllers.likePost);

module.exports = router;