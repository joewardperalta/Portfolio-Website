const path = require("path");

// Setting up express
const express = require("express");
const app = express();
const HTTPS_PORT = process.env.port || 3000;

// Setting up handlebars
const exphbs = require("express-handlebars");
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Using static files
app.use(express.static("public"));

// Navigate to homepage
app.get("/", (req, res) => {
  res.render("index", { layout: "default" });
});

// Navigate to about page
app.get("/about", (req, res) => {
  const skills = require("./skills.json");
  res.render("about", {
    data: skills,
    layout: "default",
  });
});

// Navigate to contact page
app.get("/contact", (req, res) => {
  res.render("contact", { layout: "default" });
});

// Navigate to portfolio page
app.get("/portfolio", (req, res) => {
  res.render("portfolio", { layout: "default" });
});

// Navigate to privacy page
app.get("/privacy", (req, res) => {
  res.render("privacy", { layout: "default" });
});

// Navigate to resume
app.get("/resume", (req, res) => {
  res.render("resume", { layout: "default" });
});

// Navigate to services page
app.get("/services", (req, res) => {
  res.render("services", { layout: "default" });
});

// Navigate to terms and condition page
app.get("/terms", (req, res) => {
  res.render("terms", { layout: "default" });
});

// Sends back a 404 page
app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(HTTPS_PORT, () => {
  console.log("Server listening on port " + HTTPS_PORT);
});
