const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const user = await User.findByPk(req.params.id);
  return res.json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const emailExists = await User.findOne({ where: { email: req.body.email } });
  if (emailExists) {
    return res.status(401).json({ error: "Email already in use!" });
  }
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  return res.json(user);
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function token(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(401).json({ message: "Empty fields" });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
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
    },
    process.env.JWT_SECRET,
  );
  res.json({ token, id: user.id });
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  token,
};
