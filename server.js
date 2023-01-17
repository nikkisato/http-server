const http = require("http");

// const host = "localhost";
// const port = 8000;

// GET /json
const getRequestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON Response"}`);
};
// curl http://localhost:8000

const getServer = http.createServer(getRequestListener);
getServer.listen(() => {
  console.log(`Server is running on http://localhost:8000`);
});

// POST /json
const postRequestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};
// curl http://localhost:8000

const postServer = http.createServer(postRequestListener);
postServer.listen(() => {
  console.log(`Server is running on http://localhost:8001`);
});

// GET /json - receive data either through the body
//or in the request search params.
//send that data back as json in the response
//https://www.geeksforgeeks.org/how-to-send-json-response-using-node-js/
const requestListener = (req, res) => {
  console.log("Request is Incoming");

  const responseData = {
    message: "Hello, Chris",
    endingMessage: "Thank you",
  };

  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};

const server = http.createServer(requestListener);

server.listen(8002, "localhost", function () {
  console.log("Server is Listening at Port 8002!");
});
// confused on this because I can get and post using postman?

// GET /blocking - add an endpoint that takes a really long time to do something before ending the stream (res.end).
//You should probably use a really long running loop
const getBlockingRequestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
  }, 100);
  res.end("Finished");
};
// curl http://localhost:8000

const getBlockingServer = http.createServer(getBlockingRequestListener);
getBlockingServer.listen(() => {
  console.log(`Server is running on http://localhost:8003`);
});

// GET /non-blocking - using the similar code but ensure the loop is non-blocking by using async await
