const express = require("express");
const app = express();
const HTTPS_PORT = process.env.port || 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(HTTPS_PORT, () => {
  console.log("Server listening on port " + HTTPS_PORT);
});
