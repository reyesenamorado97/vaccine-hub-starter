const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // submit email and password


        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        
    }
}

module.exports = User