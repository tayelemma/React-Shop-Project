const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);

});

//LOGIN

router.post('/login', async (req, res) => {
  // const user = await User.find({});
  const user = await User.findOne({ username: req.body.username });
  res.status(200).json(user);
});

module.exports = router;
