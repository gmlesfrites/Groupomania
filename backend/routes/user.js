//Importation d'Express pour création d'un router
const express = require('express');
const router = express.Router();

//nécessite le fichier auth du dossier middleware
const auth = require('../middleware/auth');

//nécessite le fichier user du dossier controllers
const userControllers = require('../controllers/user');

//Route pour la première authentification     
// http://localhost:3000/auth/signup
router.post('/signup',  userControllers.limiter, userControllers.signup);

//Route pour l'identification (avec limite de connexion pour éviter force brute)    
// http://localhost:3000/auth/login
router.post('/login', userControllers.limiter, userControllers.login);

//Route pour récupérer tous les utilisateurs     
// http://localhost:3000/auth
router.get('/', userControllers.getAllUsers);

// Route pour supprimer un utilisateur  
// http://localhost:3000/auth/:id
router.delete('/:id', auth, userControllers.deleteUser)

module.exports = router;