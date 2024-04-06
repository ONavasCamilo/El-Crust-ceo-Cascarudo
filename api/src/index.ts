import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running, port: ${PORT}`);
});