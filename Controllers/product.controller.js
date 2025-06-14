import Product from "../models/products.js";

const create = async (req, res) => {
  try {
    const newProduct = await Product.createProduct(req.body);
    res.status(201).json(newProduct[0]);
  } catch (err) {
    console.error("Create Product Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const list = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const get = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(499).json({ error: "Internal server error" });
  }
};

const getCat = async (req, res) => {
  try {
    const products = await Product.getProductByCat(req.params.category);
    //console.log(products.length);
    if (!products || products.length == 0)
      return res
        .status(404)
        .json({ error: "No products in " + req.params.category + " category" });
    res.json(products);
  } catch (err) {
    //console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const update = async (req, res) => {
  try {
    const updated = await Product.updateProduct(req.params.id, req.body);
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const remove = async (req, res) => {
  try {
    await Product.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  create,
  list,
  get,
  getCat,
  update,
  remove,
};
