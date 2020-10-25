const Transaction = require('../models/transaction.models');
const pool = require('../util/database');
const TransactionCtrl = {};


TransactionCtrl.getTransactions = async (req, res) => {
    const transaction = await pool.query('SELECT * FROM transactions ORDER BY transactions.id');
    res.json(transaction);
}

TransactionCtrl.getTransaction = async (req, res) => {

    const user = req.params.user;
    console.log(user)

    let getID;
    const getUser = await pool.query("SELECT * FROM users WHERE users.username = ?", [user]);

    console.log(getUser)
    getUser.find( elem => {
        getID = elem.id;
    });

    console.log(getID);

    // const transaction = await pool.query("SELECT * FROM transactions INNER JOIN users on transactions.user_id = users.id WHERE users.username = ? ", [user]);
    const transaction = await pool.query("SELECT * FROM transactions WHERE user_id = ?", [getID]);
    console.log(transaction);
    res.json(transaction);
}

TransactionCtrl.doTransaction = async (req, res) => {

    const user = req.params.user;
    console.log("usuario : ",user)

    let getID;
    const getUser = await pool.query("SELECT * FROM users WHERE users.username = ?", [user]);

    console.log(getUser)
    getUser.find( elem => {
        getID = elem.id;
    });

    console.log(getID);

    const { concept, budget, type} = req.body;

    const NewTransaction = new Transaction(concept, budget, type, getID);

    console.log(NewTransaction);

    await pool.query('INSERT INTO transactions set ?',[NewTransaction]);

    res.json(NewTransaction)

}

module.exports = TransactionCtrl;