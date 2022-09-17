const { Product } = require("../models");
const { Op } = require("sequelize");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();
  return res.status(200).json(products);
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({
      where: { [Op.or]: [{ slug: req.params.id }, { id: req.params.id }] },
    });
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    console.log(req.body);
    const data = req.body;
    data.stock = parseInt(data.stock);
    await Product.create(data);
    res.status(200).json({ message: "product created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await Product.update(req.body, { where: { id: req.params.id } });
      return res.status(200).json({ message: "product updated" });
    } else {
      return res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const deletedProduct = await Product.destroy({ where: { id: req.params.id } });
  if (!deletedProduct) return res.status(404).json({ message: "product not found" });
  return res.status(200).json({ message: "product deleted" });
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
