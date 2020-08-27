//utilisation Express
const express = require('express');
const router = express.Router();

//Nécessite le middleware authentification
const authentication = require('../middleware/auth');

//Nécessite le multer pour gestion des fichiers multimédias
const multer = require ('../middleware/multer-config');

//nécessite le fichier message du dossier controllers
const messageControllers = require('../controllers/message');

// Route pour créer un message       
// http://localhost:3000/api/message/create
router.post('/create', authentication, multer, messageControllers.createMessage);

// Route pour répondre à un message
// http://localhost:3000/api/message/link/:id
router.post('/link/:id', authentication, multer, messageControllers.answerMessage);

// Route pour modifier un message      
// http://localhost:3000/api/message/:id
router.put('/:id', authentication, multer, messageControllers.updateMessage);

// Route pour supprimer un message           
// http://localhost:3000/api/message/:id
router.delete('/:id', authentication, messageControllers.deleteMessage)

// Route pour supprimer un message           
// http://localhost:3000/api/message/admin/:id
router.delete('/admin/:id', authentication, messageControllers.deleteAdminMessage)

// Route pour afficher toutes les messages     
// http://localhost:3000/api/message/
router.get('/', authentication, messageControllers.getAllMessages);

module.exports = router;