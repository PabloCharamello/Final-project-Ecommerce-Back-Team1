const { Category, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.findAll();
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const category = await Category.findOne({ where: { slug: req.params.id } });
  const products = await Product.findAll({ where: { categoryId: req.params.id } });
  return res.json({ name: category.name, products });
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    await Category.update(req.body, { where: { id: req.params.id } });
    return res.json({ message: "category updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const category = await Category.destroy({ where: { id: req.params.id } });
  return res.json({ message: "Category destroyed" });
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
