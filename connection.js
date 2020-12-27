const mysql = require('mysql')

const dotenv = require('dotenv')

dotenv.config({
    path: './config.env'
})

// Create connection 
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.password,
    database:'forums',
    multipleStatements:true
})

module.exports = db