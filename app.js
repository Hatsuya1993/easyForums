const express = require('express')

const db = require('./connection')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

const forumsRoute = require('./routes/forumRoutes')

app.use('/',forumsRoute)

const port = process.env.PORT || "3000";

const server = app.listen(port, () => {
  console.log("Server started");
});

// Connect
db.connect((err) => {
    if(err) throw err
    console.log('MySql Connected')
})

module.exports = app