// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
mongoose.set("strictQuery", false); // suppress warning

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server only after DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit on DB failure
  });

// Routes
const user_router = require("./Routes/users");
app.use("/users", user_router);

// Serve frontend (React built with Vite)
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});
