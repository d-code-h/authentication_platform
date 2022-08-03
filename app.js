const express = require("express"),
  app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("signup", (req, res) => {
  res.render("signup");
});

app.get("reset", (req, res) => {
  res.render("reset");
});

app.listen(3000, () => {
  console.log("===========================");
  console.log("Server started at port 3000");
  console.log("===========================");
});
