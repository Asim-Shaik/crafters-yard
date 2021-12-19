import express from "express";

const router = express.Router();
import {
  getProduct,
  createProduct,
  singleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.js";

router.route("/").get(getProduct).post(createProduct);
router
  .route("/:id")
  .get(singleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

export default router;
