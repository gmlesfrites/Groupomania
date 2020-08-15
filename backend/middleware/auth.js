// Importation du package dotenv
const dotenv = require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;
        if (req.body.id && req.body.id !== userId) {
            throw "User ID non valable"
        } else {
            next();
        }
    } catch {
        res.status(401).json({ 
            error : new Error('Requête non authentifiée')
        });
    }
};