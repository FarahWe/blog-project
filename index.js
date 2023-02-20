const express = require("express");
const app = express();

// set express to use EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var name = "Eduardo Farah";
  var lang = "JavaScript";

  res.render("index", {
    name,
    lang,
  });
});

app.listen(8080, () => {
  console.log("App Rodando na porta 8080");
});
