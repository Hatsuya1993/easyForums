const db = require('../connection')

const home = (req, res) => {
    let sql = 'SELECT * FROM forumDetails';
    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('home', {
            results
        })
    })
}

const add = (req, res) => {
    const {
        email,
        topic,
        textArea
    } = req.body
    let sql = 'INSERT INTO forumDetails (email, topic, text) VALUES (?, ?, ?)';
    db.query(sql, [email, topic, textArea], (err, result) => {
        if (err) {
            throw err
        }
        res.redirect('/')
    })
}

const deleteId = (req, res) => {
    const {
        id
    } = req.params
    let sql = `DELETE FROM forumDetails WHERE id = ${id}`
    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        res.redirect('/')
    })
}

const forumId = (req, res) => {
    const {
        id
    } = req.params
    // let sql = `SELECT * FROM forumDetails WHERE id = ${id}`
    let sql =  `SELECT email, topic, text, answer FROM forumdetails INNER JOIN answer WHERE forumId = ${id}`
    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(id, results)
        res.render('forumPage', {
            results,
            id
        })
    })

}

const answerForum = (req, res) => {
    const {
        textArea
    } = req.body
    const {id} = req.params
    let sql = 'INSERT INTO answer (answer, forumId) VALUES (?, ?)';
    db.query(sql, [textArea, id], (err, result) => {
        if (err) {
            throw err
        }
        res.redirect(`/forum/${id}`)
    })
}

module.exports = {
    home,
    add,
    deleteId,
    forumId,
    answerForum
}