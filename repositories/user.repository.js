const User = require('../models/user.model');

class UserRepository {
    async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    };

    async findUserByEmail(email) {
        return await User.findOne({ email });
    };
}

module.exports = new UserRepository();