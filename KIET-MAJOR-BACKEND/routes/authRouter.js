const express = require("express");
const authRouter = express.Router();
const {signup} = require("../controllers/authController.js")
// const { generateImage } = require("../controllers/imageController.js");

authRouter.route('/signup')
    .post(signup)

module.exports = authRouter;