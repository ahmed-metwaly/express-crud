

const user = (req, res, next) => {
    res.render('web/home');   
}

const addUser = (req, res, next) => {
    res.render('web/add-user');   
}

module.exports = {user,addUser};