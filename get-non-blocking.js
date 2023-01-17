const http = require("http");
const fs = require("fs");

// GET /blocking
const host = "localhost";
const port = 8000;

//https://www.codingninjas.com/codestudio/library/blocking-and-non-blocking-in-node-js
const requestListener = function (req, res) {
  const filepath = "./uploads/sample.txt";

  const handleFileRead = (err, data) => {
    res.end(data);
  };

  fs.readFile(filepath, { encoding: "utf8" }, handleFileRead);

  // change this into async and await code challenge
  // promise

  // express
  //typescript

  //write in javascript
  //call with chris in typescript

  // promisify

  // res.end("Done");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
