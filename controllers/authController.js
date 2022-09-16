const { User, Admin } = require("../models");
const jwt = require("jsonwebtoken");

async function token(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(401).json({ message: "Empty fields" });
  }
  const { email, password } = req.body;
  let isAdmin = false;
  let user = await User.findOne({ where: { email } });

  if (!user) {
    user = await Admin.findOne({ where: { email } });
    isAdmin = true;
  }

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const valid = await user.isValidPassword(password);
  if (!valid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    {
      sub: user.id,
      isAdmin,
    },
    process.env.JWT_SECRET,
  );
  res.json({ token, id: user.id, isAdmin });
}

module.exports = {
  token,
};
