const express = require('express');
const { signupValidator, loginValidator } = require('../validations/authValidator');
const { validate } = require('../middlewares/taskValidation.middleware');
const { signup, login } = require('../controllers/auth.controller');

const router = express.Router();


router.post('/signup', signupValidator, validate, signup)
router.post('/login', loginValidator, validate, login)


module.exports = router;