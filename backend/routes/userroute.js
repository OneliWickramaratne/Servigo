import express from "express";
import { registerUser } from "../controller/usercontroller.js";
const userRouter = express.Router();
userRouter.post("/user", registerUser);
export default userRouter;