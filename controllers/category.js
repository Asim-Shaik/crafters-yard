import Category from "../models/category.js";

export const createCat = async (req, res) => {
  try {
    const newCat = new Category(req.body);
    try {
      const saveCat = await newCat.save();
      res.status(200).json(saveCat);
    } catch (err) {
      res.status(200).json(err);
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getCat = async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    console.log(err);
  }
};
