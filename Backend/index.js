const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
require("dotenv").config(); // Load env variables
const path = require("path");

// requiring cors
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
console.log(process.env.MONGO_URI, "MONGO_URI");

const body_parser = require("body-parser");
app.use(body_parser.json());

// requiring router
const user_router = require("./Routes/users");
app.use("/users", user_router);

// connection to MongoDB
require("./MongoDB/connection");

app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is connected`);
});
