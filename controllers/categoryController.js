const { Category, Product } = require("../models");
const { Op } = require("sequelize");

// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.findAll();
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  try {
    const category = await Category.findOne({
      where: { [Op.or]: [{ slug: req.params.id }, { id: req.params.id }] },
    });
    const products = await Product.findAll({ where: { categoryId: category.id } });
    return res.json({ name: category.name, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const categoryExists = await Category.findOne({ where: { name: req.body.name } });
    if (categoryExists) {
      return res.status(400).json({ message: "category alredy exists!" });
    }
    await Category.create(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}

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
