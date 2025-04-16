const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const setupSwagger = require("./swagger");

const todoRoutes = require("./routes/todos");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT;


setupSwagger(app);

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
