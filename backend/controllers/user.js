// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

//Importation du package bcrypt
const bcrypt = require('bcrypt');

// Immportation du package express-rate-limit qui va empêcher la force brute
const expressRateLimit = require('express-rate-limit');

//Importation du package jsonwebtoken
const jwt = require('jsonwebtoken')

//Connexion à la BDD
const conn = require('../middleware/mysql')


//Importation du modèle User
const models = require('../models/User');

//Constante regex pour vérification de l'email
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex  = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
// doit contenir au moins 1 chiffre, 1 lettre majuscule, 1 lettre minuscule et compter au moins 8 caractères 

//Inscription au site
exports.signup = (req, res, next) => { 
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const bio = req.body.bio;

    if (firstName === null || lastName === null || email === null || password === null) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.'});
    }

    if (firstName.length <= 2  || firstName.length >= 15) {
        return res.status(400).json({ message: 'Votre prénom doit comprendre entre 2 et 15 lettres'});
    }
    
    if (lastName.length <= 2 || lastName.length >= 15) {
        return res.status(400).json({ message: 'Votre nom doit comprendre entre 2 et 15 lettres'});
    }
    
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Votre email est invalide !"});
    }
    
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message : 'Votre mot de passe doit contenir au minimum 8 caractères dont une lettre majuscule, une lettre minuscule et un chiffre'});
    }

    const user = req.body
    bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash
        conn.query('INSERT INTO users SET ?', user, function (error,results,fields) {
        if (error) {
            return res.status(400).json(error.sqlMessage)
        } 
        return res.status(201).json({ message: 'Votre compte a bien été créé !'})
        })
    })
}

// Connexion à son compte
exports.login = (req, res, next) => { 
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        conn.query(
            'SELECT * FROM (process.env.DATABASE).users WHERE email= ?',
            email,
            function (error, results, fields) {
                if (results) {
                bcrypt.compare(password, results[0].password).then((valid) => {
                    if (!valid) {
                    res
                        .status(401)
                        .json({ message: 'Utilisateur ou mot de passe inconnu' })
                    } else {
                        let privilege = ''
                        if (results[0].isAdmin === 1) {
                            privilege = 'admin'
                        } else {
                            privilege = 'member'
                        }
                        res.status(200).json({
                        id: results[0].id,
                        firstname: results[0].firstname,
                        lastname: results[0].lastname,
                        email: results[0].email,
                        privilege: privilege,
                        accessToken: jwt.sign({
                            id: results[0].id, 
                            role: privilege 
                            },
                            process.env.TOKEN,
                            { expiresIn: '12h' }
                        )})
                    }
                })
                } else {
                    res
                    .status(401)
                    .json({ message: "l'adresse mail et/ou le mot de passe sont inconnus. Avez-vous déjà créé un compte ?" })
                }
            }
        )
    } else {
        res
          .status(500)
          .json({ message: "Entrez votre nom d'utilisateur et votre mot de passe" })
    }
};
    

// Modification du Profil Utilisateu
exports.updateProfile = (req, res, next) => { r
    models.User.findOne({
        attributes: ['bio', 'id'],
        where: { id: req.params.id}
    })
    .then((userFound) => {
        if (userFound) {
            userFound.update({
               bio:  req.body.bio
            })
            .then(userFound => {
                return res.status(200).json({ User: userFound, message: "Profil modifié !"})
            })
            .catch(error => res.status(500).json({ error, message: "Impossible de modifier votre profil."}));
        } else {
            return res.status(400).json({ message: "Utilisateur introuvable."});
        }
    })
    .catch(error => res.status(500).json({ error, message: "Impossible de récupérer l'utilisateur"}));
};

// Suppression d'un compte utilisateur
exports.deleteUser = (req, res, next) => { 

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
            return res.status(400).json({ message: "L'utilisateur n'a pas été trouvé, il ne peut pas être supprimé." });

        }
    })
    .catch( error => res.status(500).json({ error, message: 'Impossible de supprimer le compte.'}));
};

//Profil de tous les utilisateurs
exports.getAllUsers = (req, res, next) => { 

    models.User.findOne({
        attributes: ['firstName', 'lastName', 'email', 'bio'],
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

// Middleware limitation de demandes (5 par minute)
exports.limiter = expressRateLimit ({
    windowMs: 60 * 1000,
    max: 5
})