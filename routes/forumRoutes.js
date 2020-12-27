const express = require('express')

const forumRoutes = express.Router()

const {home, add} = require('../controller/forumsController')

forumRoutes.route('/').get(home)

forumRoutes.route('/add').post(add)


module.exports = forumRoutes