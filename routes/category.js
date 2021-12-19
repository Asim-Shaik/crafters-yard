import express from "express";

const router = express.Router();
import { getCat, createCat } from "../controllers/category.js";

router.route("/").get(getCat).post(createCat);

export default router;
