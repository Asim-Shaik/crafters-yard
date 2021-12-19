import Shop from "../models/shops.js";

export const getShop = async (req, res) => {
  const shopname = req.query.shop;
  const catname = req.query.cat;
  try {
    let shop;
    if (shopname) {
      shop = await Shop.find({ shopname });
    } else if (catname) {
      shop = await Shop.find({
        categories: {
          $in: [catname],
        },
      });
    } else {
      shop = await Shop.find({});
    }
    res.status(200).json({ shop });
  } catch (error) {
    console.log(error.message);
  }
};

export const createShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json(shop);
  } catch (error) {
    console.log(error.message);
  }
};

export const singleShop = async (req, res) => {
  const { id: shopId } = req.params;

  try {
    const shop = await Shop.findOne({ _id: shopId });
    res.status(200).json(shop);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteShop = async (req, res) => {
  const { id: shopId } = req.params;

  try {
    const shop = await Shop.findOneAndDelete({ _id: shopId });
    res.status(200).json(shop);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateShop = async (req, res) => {
  const { id: shopId } = req.params;

  try {
    const shop = await Shop.findOneAndUpdate({ _id: shopId }, req.body, {
      new: true,
    });
    res.status(200).json({ shop });
  } catch (error) {}
};
