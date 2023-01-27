 const { loginModel } = require("../models/user.model");

const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", false);
const loginController = async (req, res) => {
  const { name, level, score } = req.body;

  const user = new loginModel({
    name: name,
    level: level,
    score: score,
  });
  await user.save();
  res.send(user);
};


// const getprofile = async (req, res) => {
//   const { userId } = req.body;
//   const data = await signupModel.find({ _id: userId });
//   res.send(data);
// };

module.exports = { loginController };
