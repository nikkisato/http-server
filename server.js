const http = require("http");

const host = "localhost";
const port = 8000;

// GET /json
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON Response}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

http.get("http://www.nikkisato.com/", (req, res) => {
  console.log(res);
});
// https://www.memberstack.com/blog/node-http-request
