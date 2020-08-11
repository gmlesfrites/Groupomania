//Importation d'Express pour création d'un router
const express = require('express');
const router = express.Router();

//nécessite le fichier user du dossier controllers
const userControllers = require('../controllers/user');

//nécessite le fichier checkPassword du dossier middleware
const checkPassword = require('../middleware/checkPassword');

//nécessite le fichier auth du dossier middleware
const auth = require('../middleware/auth');

//Route pour la première authentification
router.post('/signup', checkPassword, userControllers.limiter, userControllers.signup);

//Route pour l'identification (avec limite de connexion pour éviter force brute)
router.post('/login', userControllers.limiter, userControllers.login);

//Route pour avoir tous les utilisateurs
router.get('/', userControllers.getAllUsers);

//route pour supprimer un utilisateur
router.delete('/:id', auth, userControllers.deleteUser);

module.exports = router;