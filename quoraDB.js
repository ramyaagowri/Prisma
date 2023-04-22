var mysql = require("mysql");
const quoraDb = mysql.createConnection({
    host : "localhost" ,
    user : "root",
    password : "password" ,
    database : "Prisma" ,
    connectionLimit : 10
})
module.exports = {quoraDb}; 