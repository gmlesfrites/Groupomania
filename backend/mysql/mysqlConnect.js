const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD
});
 
conn.connect(function (error) {
  if (error) {
      console.log("connection to MySQL failed");
      throw error
  }
  else { console.log('All is under control :-)'); }
});

  
  module.exports = conn;