const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();
  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ where: { slug: req.params.slug } });
  return res.json(product);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    await Product.update({ where: { id: req.params.id } });
    res.status(200).json({ message: "product updated" });
  } catch (error) {
    return res.status(500).json({ message: "error in update" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Product.destroy({ where: { id: req.params.id } });
  return res.json({ message: "product deleted" });
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
