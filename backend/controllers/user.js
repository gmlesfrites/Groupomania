// Importation du package dotenv
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

//Importation du package bcrypt
const bcrypt = require('bcrypt');

// Immportation du package express-rate-limit qui va empêcher la force brute
const expressRateLimit = require('express-rate-limit');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken')

//Importation du modèle User
const models = require('../models');

// Middleware limitation de demandes (5 par minute)
exports.limiter = expressRateLimit ({
    windowMs: 60 * 1000,
    max: 5
})

exports.signup = (req, res, next) => { //Inscription au site
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (username === null || email === null || password === null) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.'});
    }

    if (username.length < 5 || firstName.length >= 15 ) {
        return res.status(400).json({ message: "Votre nom d'utilisateur doit contenir entre 5 et 15 caractères ! "});
    }
    
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Votre email est invalide !"});
    }

    if (!pwRegex.test(password)) {
        return res.status(400).json({ message : 'Votre mot de passe doit contenir entre 4 et 8 caractères et contenir au moins 1 nombre'});
    }

    models.User.findOne({ // Je vérifie que l'email n'existe pas déjà
        attributes: ['email'],
        where: { email: email }
    })
    .then((userFound) => {
        if (!userFound) {
            bcrypt.hash(password, 10, function(err, bcryptedPassword) { //Hashage du mot de passe
                let newUser = models.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: bcryptedPassword,
                    job: job,
                    isAdmin: 0
                })
                .then(function(newUser) {
                    return res.status(201).json({ 'userId': newUser});
                })
                .catch(function(err) {
                    return res.status(500).json({ err });
                });
            });
            
        } else {
            return res.status(403).json({ message : " L'utilisateur existe déjà !"});
        }
    })
    .catch(error => res.status(500).json({ message: "Impossible de créer l'utilisateur.", error }));
   
};

exports.login = (req, res, next) => { // Connexion à un compte existant
    let email = req.body.email;
    let password = req.body.password;

    if(email === null || password === null) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs !'});
    }

    models.User.findOne({
        where: { email: email }
    })
    .then((userFound) => {
        if(userFound) {
            bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                if(resBycrypt) {
                    return res.status(200).json({
                        'userId': userFound.id, 
                        token: jwt.sign({userId: userFound.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '2h'})
                    });
                } else {
                    return res.status(401).json({message: 'Mot de passe incorrect.'});
                }
            })

        }else {
            return res.status(404).json({message: "L'utilisateur n'existe pas dans la BD."});
        }

    })
    .catch(error => res.status(500).json ({ error }));
};

exports.getProfile = (req, res, next) => { //Profil Utilisateur

    models.User.findOne({
        attributes: ['firstName', 'lastName', 'email', 'job'],
        where: { id: req.params.id }
    })
    .then( User => {
        if(User) {
            return res.status(200).json({ User });
        }else {
            return res.status(400).json({ message: "Impossible de récupérer votre profil utilisateur" });
        }
    })
    .catch(error => res.status(500).json({ error}));
};

exports.updateProfil = (req, res, next) => { // Modification du Profil Utilisateur
    models.User.findOne({
        attributes: ['job', 'id'],
        where: { id: req.params.id}
    })
    .then((userFound) => {
        if (userFound) {
            userFound.update({
               job:  req.body.job
            })
            .then(userFound => {
                return res.status(200).json({ User: userFound, message: "Profil modifié !"})
            })
            .catch(error => res.status(500).json({ error, message: "Impossible de modifié votre profil."}));
        } else {
            return res.status(400).json({ message: "Utilisateur introuvable."});
        }
    })
    .catch(error => res.status(500).json({ error, message: "Impossible de récupérer l'utilisateur"}));
};

exports.deleteUser = (req, res, next) => { // Suppression d'un compte utilisateur

    models.User.findOne({
        where: { id: req.params.id}
    })
    .then((userFoundForDelete) => {
        if(userFoundForDelete) {
            userFoundForDelete.destroy({
                email: userFoundForDelete.email
            })
            .then(() => res.status(200).json({ message: 'Utilisateur supprimé !'}))
            .catch( error => res.status(500).json({ error, message: "L'utilisateur n'a pas été supprimé."}));
        }else {
            return res.status(400).json({ message: "L'utilisateur n'a pas été trouvé, il ne peut être supprimé." });

        }
    })
    .catch( error => res.status(500).json({ error, message: 'Impossible de supprimer le compte.'}));
};