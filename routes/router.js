const express = require("express");
const router = express.Router();


const{information}=require("../controllers/information.js")



router.route("/info").post(information)


module.exports= router;