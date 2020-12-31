const express = require('express')

const forumRoutes = express.Router()

const {home, add, deleteId, forumId, answerForum, showId} = require('../controller/forumsController')

forumRoutes.route('/').get(home)

forumRoutes.route('/add').post(add)

forumRoutes.route('/delete/:id').get(deleteId)

forumRoutes.route('/forum/:id').get(showId)

forumRoutes.route('/forum/show/:id').get(forumId)

forumRoutes.route('/answer/:id').post(answerForum)

module.exports = forumRoutes