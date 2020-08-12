//Importation d'Express pour création d'un router
const express = require('express');
const router = express.Router();

//nécessite le fichier auth du dossier middleware
const auth = require('../middleware/auth');

//nécessite le fichier user du dossier controllers
const userControllers = require('../controllers/user');

//Route pour la première authentification
router.post('/signup',  userControllers.limiter, userControllers.signup);

//Route pour l'identification (avec limite de connexion pour éviter force brute)
router.post('/login', userControllers.limiter, userControllers.login);

//Route pour récupérer tous les utilisateurs
router.get('/', userControllers.getAllUsers);


// Route pour supprimer un utilisateur
// router.delete('/:id', auth, userControllers.deleteUser)

module.exports = router;

