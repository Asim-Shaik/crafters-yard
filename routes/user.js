import express from "express";
import {
  verifyToken,
  verifyTokenAuthorization,
} from "../controllers/verifyToken.js";

import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const routerUser = express.Router();

routerUser.route("/").post(createUser);
routerUser
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .patch(verifyTokenAuthorization, updateUser);

export default routerUser;
