const express = require("express");
const app = express();

// Variables
const host = "localhost";
const port = 8000;

// Get JSON
app.get("/", (req, res) => {
  res.send("GET JSON");
});

// Post JSON
app.post("/", (req, res) => {
  res.send("POST JSON");
});

// Get Blocking JSON
app.get("/blocking", (req, res) => {
  res.send("Blocking");
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
