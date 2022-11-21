const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');


router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/dashboard/:id',auth, userController.dashboard)

module.exports = router