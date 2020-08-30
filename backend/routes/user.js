//Importation d'Express pour création d'un router
const express = require('express');
const router = express.Router();

//nécessite le fichier auth du dossier middleware
const authentication = require('../middleware/auth');

//nécessite le fichier user du dossier controllers
const userControllers = require('../controllers/user');

//Route pour la première authentification     
// http://localhost:3000/api/auth/signup
router.post('/signup', authentication, userControllers.limiter, userControllers.signup);

//Route pour l'identification (avec limite de connexion pour éviter force brute)    
// http://localhost:3000/api/auth/login
router.post('/login', userControllers.limiter, userControllers.login);

//Route pour récupérer tous les utilisateurs     
// http://localhost:3000/api/auth
router.get('/', authentication, userControllers.getAllUsers);

// Route pour supprimer un utilisateur  
// http://localhost:3000/api/auth/:id
router.delete('/:id', authentication, userControllers.deleteUser);

// TODO Route pour supprimer un utilisateur  
// http://localhost:3000/api/auth/admin/:id
router.delete('/admin/:id', authentication, userControllers.deleteAdminUser)

module.exports = router;