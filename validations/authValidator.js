const { body } = require('express-validator');

const signupValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
];

const loginValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    body('password').notEmpty().withMessage('Password is required'),
];

module.exports = { signupValidator, loginValidator };
