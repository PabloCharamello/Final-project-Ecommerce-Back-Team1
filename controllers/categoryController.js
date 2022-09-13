const { Category, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.findAll();
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const category = await Category.findByPk(req.params.id);
  const products = await Product.findAll({ where: { categoryId: req.params.id } });
  return res.json({ name: category.name, products });
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
