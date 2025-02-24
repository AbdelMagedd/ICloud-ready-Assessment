const authService = require('../services/auth.service');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        const user = await authService.signup(name, email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signup, login };
