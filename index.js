const express = require("express");
const app = express();

const PORT = 4000;

function handleListen() {
  console.log(`Listening on http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("hello~");
}

function handleProfile(req, res) {
  res.send("you are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListen);
