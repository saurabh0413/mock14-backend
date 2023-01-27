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

const randomController = async (req, res) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const length = 6;
  let word = "";

  for (let i = 0; i < length; i++) {
    const getit = Math.floor(Math.random() * alphabets.length);
    const letter = alphabets[getit];
    word += letter;
  }
  console.log(word);
  res.send(word);
};
const dashboardController = async (req, res) => {
  try {
    const users = await loginModel.find();
    return res.send(users);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { loginController, randomController, dashboardController };
