import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    shopname: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
