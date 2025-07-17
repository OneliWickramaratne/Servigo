import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/userroute.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = "mongodb+srv://oneliwickramaratne:root@cluster0.ovo28lw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connection successfully"))
  .catch((err) => console.log("MongoDB connection failed", err.message));
// Routes
app.use("/api/users", userRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
