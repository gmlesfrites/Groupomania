console.log('banana controller message')





//Importation de la configuration de connexion à mysql
const conn = require('../mysql/mysqlConnect');

// // Importation du package dotenv
// const dotenv = require('dotenv').config();

// //Importation du package bcrypt
// const bcrypt = require('bcrypt');

// // Immportation du package express-rate-limit qui va empêcher la force brute
// const expressRateLimit = require('express-rate-limit');

// //Importation du package jsonwebtoken
// const jwt = require('jsonwebtoken')

// //Importation du modèle User
// const User = require('../models/User');

// exports.signup = (req, res, next) => {
//     const user = req.body
    
//     bcrypt.hash(user.password, 10).then((hash) => {
//         user.password = hash
//         conn.query('INSERT INTO users SET ?', user, function (error, results, fields) {
//       if (error) {
//         return res.status(400).json(error.sqlMessage)
//       } 
//       return res.status(201).json({ message: 'Votre compte a bien été créé ! ' })
//     })
//   })
// }

// exports.login = (req, res, next) => {
//     const username = req.body.username
//     const password = req.body.password
    
//     if (username && password) {
//         conn.query(
//             'SELECT * FROM database_development_groupomania.users WHERE username= ?',
//             username,
//             function (_error, results, _fields) {
//                 if (results.length > 0) {
//                 bcrypt.compare(password, results[0].password).then((valid) => {
//                     if (!valid) {
//                         res.status(401).json({ message: 'Utilisateur ou mot de passe inconnu' })
//                     } else {
//                         let privilege = ''
//                         if (results[0].isAdmin === 1) {
//                             privilege = 'admin'
//                         } else {
//                             privilege = 'member'
//                         }
//                         res.status(200).json({
//                             userId: results[0].iduser,
//                             username: results[0].username,
//                             email: results[0].email,
//                             privilege: privilege,
//                             accessToken: jwt.sign({
//                                 userId: results[0].iduser, 
//                                 role: privilege
//                             },
//                             process.env.TOKEN,
//                             { expiresIn: '12h' }
//                         )})
//                     }
//                 })
//                 } else {
//                     res.status(401).json({ message: 'Utilisateur ou mot de passe inconnu' })
//                 }
//             }
//         )
//     } else {
//         res.status(500).json({ message: "Entrez un nom d'utilisateur et un mot de passe" })
//     }
// }

// exports.getAllUsers = (req, res, next) => {
//     conn.query(
//         'SELECT iduser, username, isAdmin, comment, email FROM database_development_groupomania.users',
//         function (error, results, fields) {
//         if (error) {
//             return res.status(400).json(error)
//         }
//       return res.status(200).json({ results })
//     }
//   )
// }

// exports.deleteUser = (req, res, next) => {
//     conn.query(
//         `DELETE FROM users WHERE iduser=${req.params.id}`,
//         req.params.id,
//         function (error, results, fields) {
//         if (error) {
//             return res.status(400).json(error)
//         }
//         return res.status(200).json({ message: 'Votre compte a été supprimé !' })
//         }
//     )
// }