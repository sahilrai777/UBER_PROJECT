const express = require('expres');
const router = express.Router();
const {body}= require("express-validator")
const userController= require('../controllers/user.controllers');

route.post('/register'[
    body('email'),isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({main:3}).withMessage
    ('first name atleast 3 character long'),
    body('password').isLength({min:6}).withMessage
    ('password must be at least 6 character long')
],
    userController.registerUser
)

module.exports= router;