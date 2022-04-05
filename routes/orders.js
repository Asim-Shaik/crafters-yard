import express from "express";
import {
  verifyToken,
  verifyTokenAuthorization,
} from "../controllers/verifyToken.js";

import {
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
  singleOrder,
} from "../controllers/orders.js";

const routerOrder = express.Router();

routerOrder.route("/").get(getOrder).post(createOrder);
routerOrder
  .route("/:id")
  .get(singleOrder)
  .delete(deleteOrder)
  .patch(updateOrder);

export default routerOrder;
