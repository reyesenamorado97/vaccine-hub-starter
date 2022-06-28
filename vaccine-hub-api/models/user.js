const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {

       // const requiredFields = ["email", "password"];
       // requiredFields.forEach((field) => {
        //    if (!credentials.hasOwnProperty(field)) {
        //      throw new BadRequestError("Error! Please input an email and password.");
        //    }
        //  });

        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        
    }
}

module.exports = User