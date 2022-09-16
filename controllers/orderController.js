const { Order, User } = require("../models");

async function index(req, res) {
  if (req.query.userId) {
    if (!req.auth.isAdmin && req.auth.sub != req.query.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const orders = await Order.findAll({ where: { userId: req.auth.sub } });
    return res.json(orders);
  }
  if (!req.auth.isAdmin) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const orders = await Order.findAll({ include: User });
  res.json(orders);
}

async function store(req, res) {
  try {
    const order = await Order.create({ ...req.body, userId: req.auth.sub });
    res.json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  const order = await Order.findOne({ where: { id: req.params.id } });
  if (order.id !== req.auth.sub) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    order.update({ ...req.body });
    order.save();
    res.json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  index,
  store,
  update,
};
