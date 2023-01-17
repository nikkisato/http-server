const http = require("http");
const fs = require("fs");

// GET /blocking
const host = "localhost";
const port = 8000;

//https://www.codingninjas.com/codestudio/library/blocking-and-non-blocking-in-node-js
const requestListener = function (req, res) {
  const filepath = "./uploads/sample.txt";

  fs.readFile(filepath, { encoding: "utf8" }, (err, data) => {
    console.log(data);
  });

  let sum = 0;
  for (let i = 1; i <= 73; i++) {
    sum = sum + i;
  }

  res.end("Done");
  console.log("Sum: ", sum);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
