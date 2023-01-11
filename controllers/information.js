require("dotenv").config();

const asyncWrapper = require("../middleware/async");
const informationSchema = require("../models/informationSchema");





const information = asyncWrapper(async (req, res, next) => {
  const {
    name,
    rollNo,
    email,
    mobileNumber,
    branch,
    year
  } = req.body;

  try {
    const task= await informationSchema.create({
    name,
    rollNo,
    email,
    mobileNumber,
    branch,
    year
    });
    res.json(task).status(200);
  } catch (error) {
    res.json(error).status(400);
  }

});

module.exports = {information};
