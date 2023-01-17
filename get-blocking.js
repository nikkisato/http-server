const http = require("http");
const fs = require("fs");

// GET /blocking
const host = "localhost";
const port = 8000;

//https://www.codingninjas.com/codestudio/library/blocking-and-non-blocking-in-node-js
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  // const filepath = "./uploads/sample.txt";
  // const data = fs.readFileSync(filepath, { encoding: "utf8" });
  // console.log(data);

  if (req.url === "/blocking") {
    let sum = 0;
    for (let i = 1; i <= 100000000; i++) {
      sum = sum + i;
    }
    res.end(`Finished Blocking ${Math.random()}`);
  } else {
    // chris will send event loop video
    
    res.end(`Finished Non Blocking ${Math.random()}`);
  }

  // console.log("Sum: ", sum);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
