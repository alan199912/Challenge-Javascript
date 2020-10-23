const pool = require('../util/database');

module.exports = class User {

    constructor(username, password, fullname, role) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.role = role;
    }

}
