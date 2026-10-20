const express = require('expres');
const router = express.Router();
const {body}= require("express-validator")
const userController= require('../controllers/user.controllers');
const authMiddleware =require('../middleWares/auth.middlewre');


route.post('/register'[
    body('email'),isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({main:3}).withMessage
    ('first name atleast 3 character long'),
    body('password').isLength({min:6}).withMessage
    ('password must be at least 6 character long')
],
    userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('invallid email'),
    body('password').isLength({min:6}).withMessage('')

],
 userController.loginUser
)
router.get('/profile',authMiddleware.authUser,userController.getUSerProfile)




module.exports= router;