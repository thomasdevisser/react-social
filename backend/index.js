require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Server works");
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
