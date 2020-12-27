const home = (req, res) => {
    res.render('home')
}

const add = (req, res) => {
    console.log(req.body)
}

module.exports = {
    home,
    add
}