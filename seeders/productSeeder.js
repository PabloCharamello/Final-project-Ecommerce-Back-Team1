const { Sofas } = require("./categorySeeder")();
const { Product } = require("../models");
const Prado = {
  name: "Prado",
  "short-description":
    "Prado has first and foremost been designed based on the study of lifestyles and human nature",
  description: `Typically the design process surrounding a new sofa is heavily focused on aesthetic research. Prado represents a departure from this school of thought completely.
	Prado has first and foremost been designed based on the study of lifestyles and human nature. We find the same inspirations in Prado that brought us Smala in the earlier part of this century.`,
  details: `Prado consists of a vast bench seat (available in two sizes: 100*200 cm; 39 3/8'' x 78 3/4'' and 120*240 cm; 47 1/4'' x 94 1/2'') that can be combined and adjusted as desired and onto which back cushions may be placed at will, so that one can sit or lie down as they wish.
  It offers complete freedom as these cushions, weighted and equipped with a non-slip system, do not need to be rested against or attached to any object for support.`,
  price: 10585,
  stock: 10,
  images: [
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue1_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue3_1500x1500.jpg",
    "https://images.ligne-roset.com/cache/products/3401/3d-views/1/1/11370600_6577_vue8_1500x1500.jpg",
  ],
  featured: true,
  categoryId: 1,
};

module.exports = async () => await Product.create(Prado);
