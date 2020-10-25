const pool = require('../util/database');

module.exports = class Transaction {

    constructor(concept, budget, type, user_id) {
        this.concept = concept;
        this.budget = budget;
        this.type = type;
        this.user_id = user_id;
    }

}
