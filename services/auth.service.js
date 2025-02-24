const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/user.repository');

const signup = async (name, email, password) => {
    const existingUser = await authRepository.findUserByEmail(email);
    if (existingUser) throw new Error('Email already in use');
    console.log(name, email, password)
    const hashedPassword = await bcrypt.hash(password, 10);
    return await authRepository.createUser({ name, email, password: hashedPassword });
};

const login = async (email, password) => {
    const user = await authRepository.findUserByEmail(email);
    if (!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid email or password');

    const token = jwt.sign({ userId: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    return { token, user };
};

module.exports = { signup, login };
