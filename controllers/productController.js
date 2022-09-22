const { Product } = require("../models");
const { Op, where } = require("sequelize");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const PassThrough = require("node:stream");
const Supabase = require("@supabase/supabase-js");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll();
  return res.status(200).json(products);
}

// Display the specified resource.
async function show(req, res) {
  try {
    let query;
    if (isNaN(Number(req.params.id))) {
      query = { slug: req.params.id };
    } else {
      query = { id: Number(req.params.id) };
    }
    const product = await Product.findOne({
      where: query,
    });
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const supabase = Supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    async function uploadImage(image) {
      const rawImage1 = fs.createReadStream(image.filepath);
      const { data, error } = await supabase.storage
        .from("product-images")
        .upload(`public/${image.newFilename}`, rawImage1, {
          contentType: image.mimetype,
        });
      if (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
      return data;
    }

    const image1 = await uploadImage(files.image1);
    const image2 = await uploadImage(files.image2);
    const image3 = await uploadImage(files.image3);
    try {
      fields.stock = parseInt(fields.stock);
      fields.images = [];
      fields.images[0] = `${process.env.SUPABASE_BUCKET_URL}${image1.Key}`;
      fields.images[1] = `${process.env.SUPABASE_BUCKET_URL}${image2.Key}`;
      fields.images[2] = `${process.env.SUPABASE_BUCKET_URL}${image3.Key}`;
      await Product.create(fields);
      return res.status(200).json({ message: "product created" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  });
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

async function featured(req, res) {
  try {
    const products = await Product.findAll({ where: { featured: true } });
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  featured,
};
