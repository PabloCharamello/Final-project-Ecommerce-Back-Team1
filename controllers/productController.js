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
    const rawImage1 = fs.createReadStream(files.image1.filepath);
    const { data: dataImage1, error } = await supabase.storage
      .from("product-images")
      .upload(`public/${files.image1.newFilename}`, rawImage1, {
        contentType: files.image1.mimetype,
      });
    const rawImage2 = fs.createReadStream(files.image2.filepath);
    const { data: dataImage2, error: error2 } = await supabase.storage
      .from("product-images")
      .upload(`public/${files.image2.newFilename}`, rawImage2, {
        contentType: files.image2.mimetype,
      });
    const rawImage3 = fs.createReadStream(files.image3.filepath);
    const { data: dataImage3, error: error3 } = await supabase.storage
      .from("product-images")
      .upload(`public/${files.image3.newFilename}`, rawImage3, {
        contentType: files.image3.mimetype,
      });
    if (error || error2 || error3) {
      console.log(error);
      console.log(error2);
      console.log(error3);
      return res.status(500).json({ message: "supabase error" });
    }
    try {
      fields.stock = parseInt(fields.stock);
      fields.images = [];
      fields.images[0] = `${process.env.SUPABASE_BUCKET_URL}${dataImage1.Key}`;
      fields.images[1] = `${process.env.SUPABASE_BUCKET_URL}${dataImage2.Key}`;
      fields.images[2] = `${process.env.SUPABASE_BUCKET_URL}${dataImage3.Key}`;
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
