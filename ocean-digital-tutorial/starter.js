// Step 1
// Common js
const http = require("http");

// Variables
const host = "localhost";
const port = 8000;

// Request Listener
const requestListener = function (req, res) {
  // req = request object (what we send out)
  // res = response object (what we get back)

  res.writeHead(200);
  res.end("Http Server");
};

const server = http.createServer(requestListener);
// We must bind to a network address, server.listen method
//needs 3 arguements, port, host,
//and a callback function that fires
//when the server begins to listen on the
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// curl http://localhost:8000

// Step 2 — Returning Different Types of Content
