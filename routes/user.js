import express from "express";

import {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const routerUser = express.Router();

routerUser.route("/").post(createUser);
routerUser.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

export default routerUser;
