const pool = require('../util/database');

module.exports = class Expenses {

    constructor(title, amount, date) {
        this.title = title;
        this.amount = amount;
        this.date = date;
    }

}
