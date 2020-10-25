const pool = require('../util/database');

module.exports = class User {

    constructor(username, password, email, fullname, role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullname = fullname;
        this.role = role;
    }

}

module.export = class UserLogin {
    constructor(username) {
        this.username = username;
        // this.password = password;
    }
}
