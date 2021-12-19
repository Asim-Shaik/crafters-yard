import express from "express";

const router = express.Router();
import {
  getShop,
  createShop,
  singleShop,
  deleteShop,
  updateShop,
} from "../controllers/shop.js";

router.route("/").get(getShop).post(createShop);
router.route("/:id").get(singleShop).delete(deleteShop).patch(updateShop);

export default router;
