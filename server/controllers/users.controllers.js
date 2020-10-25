const User = require('../models/users.models');
const pool = require('../util/database');
const UserCtrl = {};

UserCtrl.getUsers = async (req, res ) => {

    const users = await pool.query('SELECT * FROM users');
    res.json(users);
    

}

UserCtrl.registerUsers = async (req, res) => {

    const { username, password, email ,fullname, role } = req.body;

    const newUser = new User(username, password, email, fullname, role);

    console.log(newUser);
    
    await pool.query('INSERT INTO users set ?',[newUser]);
    
    // res.send('recieved');
    res.json({
        status: 'User Saved'
    });

}

UserCtrl.loginUsers = async (req, res) => {

    const user = req.params.user
    console.log(user)
    
    const rows = await pool.query('SELECT * FROM users WHERE username = ?', [user]);
    res.json(rows)

}



module.exports = UserCtrl;