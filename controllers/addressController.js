const { Address } = require("../models");

async function index(req, res) {
  try {
    const addresses = await Address.findAll({ where: { userId: req.auth.sub } });
    return res.json(addresses);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

async function show(req, res) {
  try {
    const address = await Address.findByPk(req.params.id);
    if (address.userId !== req.auth.sub) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    return res.json(address);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

async function store(req, res) {
  try {
    const address = await Address.create({ ...req.body, userId: req.auth.sub });
    res.json(address);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

async function destroy(req, res) {
  try {
    const address = await Address.findByPk(req.params.id);
    if (address.userId !== req.auth.sub) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await Address.destroy({ where: { id: req.params.id } });
    return res.json({ message: "destroyed" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  destroy,
};
