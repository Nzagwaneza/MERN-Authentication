import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(err));

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/server/user", userRoutes);
