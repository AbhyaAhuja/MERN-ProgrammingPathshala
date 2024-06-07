const express = require("express");
const authRouter = express.Router();
const {signup, login} = require("../controllers/authController.js")
// const { generateImage } = require("../controllers/imageController.js");

authRouter.route('/signup')
    .post(signup)

authRouter.route('/login')
    .post(login)

module.exports = authRouter;