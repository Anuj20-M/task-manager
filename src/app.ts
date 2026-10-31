import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  console.log(req.method, req.url);
  res.json({
    success: true,
    message: "Task Management API is running",
  });
});

export default app;
