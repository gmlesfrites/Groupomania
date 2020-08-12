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

//Route pour mettre à jour le profil
router.put('/:id', auth, userControllers.updateProfile)

//route pour supprimer un utilisateur
router.delete('/:id', auth, userControllers.deleteUser);

//Route pour avoir tous les utilisateurs
router.get('/', userControllers.getAllUsers);

module.exports = router;

