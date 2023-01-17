const http = require("http");
const fs = require("fs");

// GET /blocking
const host = "localhost";
const port = 8000;

//https://www.codingninjas.com/codestudio/library/blocking-and-non-blocking-in-node-js
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  const filepath = "./uploads/sample.txt";
  const data = fs.readFileSync(filepath, { encoding: "utf8" });
  console.log(data);
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  res.end(`Finished`);
  console.log("Sum: ", sum);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// GET /non-blocking - using the similar code but ensure the loop is non-blocking by using async await
