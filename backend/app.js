// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

// Importation du package Helmet (sécurité recommandée par Express)
const helmet = require ('helmet');

// Importation middleware utilisation express-session
const manageCookie = require('./middleware/manageCookie');

//Création du serveur avec framework Express
const express = require('express');
const app = express();

//Importation du package body-parser 
const bodyParser = require('body-parser');

//Importation du chemin des fichiers multimédia
const path = require('path');

//Importation des routes
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');
const likesRoutes = require('./routes/like');

//Middleware pour autorisation headers CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware utilisation helmet
app.use(helmet());

//Middleware utilisation bodyParser
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());


//Middleware gestion des cookies
app.use(manageCookie);

// //middleware pour l'accès aux ressources statiques 
// app.use('/mysql', express.static(path.join(__dirname, 'mysql')));

//middleware utilisation des routes
app.use('/api/message', messageRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/vote', likesRoutes );    //TODO /api/messages/:messageId/vote

//Export de l'app Express pour utilisation server.js
module.exports = app;