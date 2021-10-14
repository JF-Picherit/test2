const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models').User;
const secret = 'test';

module.exports = class UsersRepository {

    async signIn(object) {

        const { email, password } = object;

        try {
          const oldUser = await this.getByEmail(email);
      
          if (!oldUser) return { message: "User doesn't exist" };
      
          const isPasswordCorrect = await this.checkPassword(password, oldUser.password);

          if (!isPasswordCorrect) return { message: "Invalid credentials" };
      
          const token = await this.createToken(oldUser);
      
          return { result: oldUser, token };
        } 
        catch (err) 
        {
          return { message: "Something went wrong" };
        }
    }

    async signUp(object) {
        const { email, password, firstName, lastName } = object;
  
        try {
            const oldUser = await this.getByEmail(email);

            if (oldUser) return { message: "User already exists" };
        
            const hashedPassword = await bcrypt.hash(password, 12);
        
            const result = await this.createUser({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

            const token = await this.createToken(result);
        
            return { result: result, token };
        } 
        catch (err) 
        {
            return { message: "Something went wrong" };
        }
    }

    async getByEmail(email) {
        return await new Promise((resolve, reject) => {
            User.findOne({ where: {email: email} }).then((user) => 
            {
              resolve(user);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }

    async createUser(object) {
        return await new Promise((resolve, reject) => {
            User.create(object).then((user) => 
            {
              resolve(user);
            })
            .catch((err) => 
            { 
              reject(err);
            });
        });
    }

    async checkPassword(password, pass) {
        return bcrypt.compare(password, pass);
    }

    async createToken(user) {
            return jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: "1h" });
    }

}
