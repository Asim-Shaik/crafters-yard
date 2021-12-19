import express from "express";

import { loginUser } from "../controllers/login.js";

const routerLogin = express.Router();

routerLogin.route("/").post(loginUser);
export default routerLogin;
