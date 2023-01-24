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

  res.status(400).json(responseData);
  // res.json(responseData);
  // .json would also "send" or "end" the stream
  // typically do not want to use end in express
  // send would send the client the request
});

// Post JSON
function callBack(req, res) {
  res.json({ message: "This is a JSON Response" });
}
app.post("/", callBack);
// automatically send a 200 response unless i specifically set the status
// very good pattern to follow for large code projects
// Code split

// Get Blocking JSON
app.get("/blocking", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  let sum = 0;
  for (let i = 1; i <= 100000000; i++) {
    sum = sum + i;
  }
  res.end(`Finished Blocking ${Math.random()}`);
});
// tried to avoid this when using node 

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
