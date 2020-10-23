const { connect } = require('../routes/index.routes');
const pool = require('../util/database');

module.exports = class Transaction {

    constructor(concept, budget, type) {
        this.concept = concept;
        this.budget = budget;
        this.type = type;
    }

}
