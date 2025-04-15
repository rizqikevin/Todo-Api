const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (request, response) => {
  const { username, password } = request.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash });
  await user.save();
  response.json({ message: "User Created" });
});

router.post("/login", async (request, respon) => {
  const { username, password } = request.body;
  const user = await User.findOne({ username });
  if (!user) return respon.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return respon.status(400).json({ message: "invalid credintial" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  respon.json({ token });
});

module.exports = router;
