const userController = require('../controllers/UserController');
const express = require('express');
const route = express.Router();
const authenticate = require('../middleware/auth');

route.post('/login', userController.login);
route.post('/register', userController.register);
route.post('/logout',userController.logout);
route.put('/update', authenticate, userController.updateUser);
route.get("/user", authenticate, userController.getUser);

module.exports = route;