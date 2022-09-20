const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const user = await User.findByPk(req.params.id);
  return res.json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
