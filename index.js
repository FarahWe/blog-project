const express = require("express");
const app = express();

// set express to use EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("App Rodando na porta 8080");
});
