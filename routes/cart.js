import express from "express";
import {
  verifyToken,
  verifyTokenAuthorization,
} from "../controllers/verifyToken.js";

import {
  getCart,
  createCart,
  deleteCart,
  updateCart,
  singleCart,
} from "../controllers/Cart.js";

const routerCart = express.Router();

routerCart.route("/").get(getCart).post(createCart);
routerCart.route("/:id").get(singleCart).delete(deleteCart).patch(updateCart);

export default routerCart;
