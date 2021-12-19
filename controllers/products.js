import Product from "../models/products.js";

export const getProduct = async (req, res) => {
  const shopname = req.query.shop;
  const catname = req.query.cat;
  try {
    let products;
    if (shopname) {
      products = await Product.find({ shopname });
    } else if (catname) {
      products = await Product.find({
        categories: {
          $in: [catname],
        },
      });
    } else {
      products = await Product.find({});
    }
    res.status(200).json({ products });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(201).json(products);
  } catch (error) {
    console.log(error.message);
  }
};

export const singleProduct = async (req, res) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findOne({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findOneAndDelete({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  try {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ product });
  } catch (error) {}
};
