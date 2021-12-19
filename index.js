import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import products from "./routes/products.js";
import login from "./routes/login.js";
import user from "./routes/user.js";
import shop from "./routes/shop.js";
import cat from "./routes/category.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});
app.use("/api/products", products);
app.use("/api/user", user);
app.use("/api/login", login);
app.use("/api/shop", shop);
app.use("/api/category", cat);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://asim:dantheman55@cluster0.pkaol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
