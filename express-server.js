const express = require("express");
const app = express();

// Variables
const host = "localhost";
const port = 8000;

// Get JSON
app.get("/", (req, res) => {
  const responseData = {
    message: "Hello, Chris",
    endingMessage: "Thank you",
  };

  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
});

// Post JSON
app.post("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON Response"}`);
});

// Get Blocking JSON
app.get("/blocking", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/blocking") {
    let sum = 0;
    for (let i = 1; i <= 100000000; i++) {
      sum = sum + i;
    }
    res.end(`Finished Blocking ${Math.random()}`);
  } else {
    res.end(`Finished Non Blocking ${Math.random()}`);
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
