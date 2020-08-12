// Importation du package dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

//Connexion à MySql
const mysql = require('mysql2');
const conn= mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
 
conn.connect(function (error) {
    if (error) {
        console.log("connexion to MySQL failed");
        throw error
    }
    else { console.log('Connexion to mySQL : All is under control :-)'); }
});

module.exports = conn;