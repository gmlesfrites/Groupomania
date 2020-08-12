//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//nécessite le fichier message du dossier controllers
const likeControllers = require('../controllers/like');

// Like
router.post('/:id/like', authentication, likeControllers.likePost);

module.exports = router;