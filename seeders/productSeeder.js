const { Sofas } = require("./categorySeeder")();
const { Product } = require("../models");
console.log(Sofas);
const Prado = {
  name: "Prado",
  "short-description":
    "Prado has first and foremost been designed based on the study of lifestyles and human nature",
  description: `Typically the design process surrounding a new sofa is heavily focused on aesthetic research. Prado represents a departure from this school of thought completely.
	Prado has first and foremost been designed based on the study of lifestyles and human nature. We find the same inspirations in Prado that brought us Smala in the earlier part of this century.`,
  price: 10585,
  stock: 10,
  images: JSON.stringify({
    1: "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg",
    2: "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue3_1500x1500.jpg",
    3: "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue8_1500x1500.jpg",
  }),
  featured: true,
  categoryId: 1,
};

module.exports = async () => await Product.create(Prado);
