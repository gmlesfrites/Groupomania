//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//Nécessite le multer pour gestion des fichiers multimédias
const multer = require ('../middleware/multer-config');

//nécessite le fichier message du dossier controllers
const messageControllers = require('../controllers/message');

//route pour créer un message       
// http://localhost:3000/api/message
router.post('/',  multer, messageControllers.createMessage);

// http://localhost:3000/api/message/:id
router.post('/:id',  multer, messageControllers.answerMessage);

//route pour modifier un message      
// http://localhost:3000/api/message/:id
router.put('/:id', authentication, multer, messageControllers.updateMessage);

//Route pour supprimer un message           
// http://localhost:3000/api/message/:id
router.delete('/:id', authentication, messageControllers.deleteMessage)

//route pour afficher toutes les messages     
// http://localhost:3000/api/message/
router.get('/', authentication, messageControllers.getAllMessages);

module.exports = router;