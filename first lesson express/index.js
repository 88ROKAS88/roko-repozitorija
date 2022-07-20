const express = require("express");
const app = express();
const port = 8080;

const os = require("os");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/os", (req, res) => {
  res.send(os.type());
});

app.get("/cpu", (req, res) => {
  res.send(os.cpus());
});

app.get("/ram", (req, res) => {
  let value1 = os.totalmem();
  res.send("os.totalmem() => " + value1);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
