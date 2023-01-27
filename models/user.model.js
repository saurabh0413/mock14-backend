const { default: mongoose } = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const loginModel = mongoose.model("login", loginSchema);

module.exports = { loginModel };
