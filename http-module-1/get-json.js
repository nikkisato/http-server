const http = require("http");

// const host = "localhost";
// const port = 8000;

// GET / json;
// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(`{"message": "This is a JSON Response"}`);
// };
// // curl http://localhost:8000

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

const host = "localhost";
const port = 8000;

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

  console.log(req.method);

  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
};

const server = http.createServer(requestListener);

server.listen(port, host, function () {
  console.log(`Server is Listening at Port ${port}!`);
});

// confused on this because I can get and post using postman?
