// Importation du package dotenv
const dotenv = require('dotenv').config();

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
const discussionRoutes = require('./routes/discussion');
const userRoutes = require('./routes/user');

// TODO connexion à BDD

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
app.use(bodyParser.json());

//Middleware gestion des cookies
app.use(manageCookie);

//TODO middleware pour l'accès aux ressources statiques 
app.use('/images', express.static(path.join(__dirname, 'BDD')));

//middleware utilisation des routes
app.use('/api/discussion', discussionRoutes);
app.use('/api/auth', userRoutes);

//Export de l'app Express pour utilisation server.js
module.exports = app;