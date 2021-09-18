const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});

app.get("/pictionary", (req, res) => {
  res.sendFile(__dirname + "/public/options.html");
});
app.get("/pictionary", (req, res) => {
  res.sendFile(__dirname + "/public/phrases.html");
});
app.get("/pictionary", (req, res) => {
  res.sendFile(__dirname + "/public/pictionary.html");
});

app.listen("3000", console.log("Listening on port 3000."));