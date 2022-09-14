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
async function update(req, res) {}

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
