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

//Constante regex pour vérification de l'email
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Constante regex pour vérfification du mot de passe : doit contenir au moins 1 chiffre, 1 lettre majuscule, 1 lettre minuscule et compter au moins 8 caractères 
const passwordRegex  = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,15})$/;

//Inscription au site
exports.signup = (req, res, next) => { 
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    if (firstname === null || lastname === null || email === null || password === null) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs requis.'});
    }

    if (firstname.length <= 2  || firstname.length >= 15) {
        return res.status(400).json({ message: 'Votre prénom doit comprendre entre 2 et 15 lettres'});
    }
    
    if (lastname.length <= 2 || lastname.length >= 15) {
        return res.status(400).json({ message: 'Votre nom doit comprendre entre 2 et 15 lettres'});
    }
    
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Votre email est invalide !"});
    }
    
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message : 'Votre mot de passe doit contenir au minimum 8 caractères dont une lettre majuscule, une lettre minuscule et un chiffre'});
    }

    const user = req.body;

    bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash
        conn.query('INSERT INTO users SET ?', user, 
        (error,results,fields) => {
        if (error) {
            return res.status(400).json({message: 'Avez-vous renseigné les champs requis ? Votre mot de passe est-il bien configuré ? Avez-vous déjà un compte ? ' + error})
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
            // recherche email dans la base de données
            'SELECT * FROM development_groupomania.users WHERE email = ?',  email,                   
            (error, results, fields) => {
                if (results) {
                    bcrypt.compare(password, results[0].password).then((valid) => {
                        if (!valid) {
                            res
                            .status(401)
                            .json({ message: 'Utilisateur ou mot de passe inconnu' })
                        } else {
                            let privilege = ''
                            if (results[0].isAdmin === 1) {
                                privilege = 'Modérateur'
                            } else {
                                privilege = 'Membre'
                            }
                            res.status(200).json({
                                userId: results[0].userId,
                                firstname: results[0].firstname,
                                lastname: results[0].lastname,
                                bio: results[0].bio,
                                email: results[0].email,
                                privilege: privilege,
                                accessToken: jwt.sign(
                                    {
                                    userId: results[0].userId, 
                                    privilege : privilege, 
                                    },
                                    process.env.TOKEN,
                                    { expiresIn: '12h' }
                                )   
                            })
                        }
                    })
                } else {
                    res
                    .status(401)
                    .json({ message: 'Utilisateur ou mot de passe inconnu' })
                }
            }
        )
    } else {
        res
        .status(500)
        .json({ message: "l'adresse mail est déjà utilisée" })
    }
};

//Sélection de tous les utilisateurs
exports.getAllUsers = (req, res, next) => {
    conn.query(
        'SELECT * FROM development_groupomania.users ',
        // 'SELECT * FROM development_groupomania.users LEFT JOIN likes ON users.id = likes.userId',
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            return res.status(200).json({ results })
        }
    )
}

// Middleware de suppression d'un utilisateur
exports.deleteUser = (req, res, next) => {    

    conn.query(
        'SELECT * FROM users ',
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            const deleteUser = req.body.userId;
            const userToDelete = req.params.id;
            
            if (deleteUser !== userToDelete) {
                return res.status(401).json({ message: 'Vous ne pouvez pas effectuer cette action'})
            }
            
            conn.query(
                `DELETE FROM users WHERE id= ?`, deleteUser,
                (error, results, fields) => {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                    .status(200)
                    .json({ message: 'Le compte a bien été supprimé !' })
                }
            )
        }
    )
}

// Middleware de suppression d'un utilisateur par l'administrateur
exports.deleteAdminUser = (req, res, next) => {    

    conn.query(
        'SELECT * FROM users ',
        (error, results, fields) => {
            if (error) {
                return res.status(400).json(error)
            }
            const deleteUser = req.body.userId;
            
            conn.query(
                `DELETE FROM users WHERE id= ?`, deleteUser,
                (error, results, fields) => {
                    if (error) {
                        return res.status(400).json(error)
                    }
                    return res
                    .status(200)
                    .json({ message: 'Le compte a bien été supprimé !' })
                }
            )
        }
    )
}

// Middleware limitation de demandes (50 par minute)
exports.limiter = expressRateLimit ({
    windowMs: 60 * 1000,
    max: 50
})