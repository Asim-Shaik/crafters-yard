import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//login
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("wrong credentials");
    const validates = await bcrypt.compare(req.body.password, user.password);
    !validates && res.status(400).json("wrong credentials");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {
        expiresIn: "3d",
      }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
