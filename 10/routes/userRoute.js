const express=require('express')
const userController = require('../controllers/usersController.js');
const userRouter = express.Router();

userRouter.route('/')
.get(userController.getUser)
.post(userController.postUser)
.put(userController.putUser)
.patch(userController.editUser)
.delete(userController.delUser);


module.exports = userRouter;