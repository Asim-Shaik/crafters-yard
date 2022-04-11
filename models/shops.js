import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shopname: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    profile: {
      type: String,
    },
    category: {
      type: Array,
    },
    orders: {
      type: Object,
      trim: true,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
