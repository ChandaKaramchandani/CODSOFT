const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // ✅ This should be here

const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

console.log("Mongo URL:", process.env.MONGO_URL); // ✅ For testing

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error", err));

app.get("/", (req, res) => {
  res.send("📡 Project Management API is running");
});

app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
