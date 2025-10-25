const { log } = require("console");
const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log("Home page route hit");
  res.render("index");
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
