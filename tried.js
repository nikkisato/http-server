// GET /json - receive data either through the body or in the request search params. send that data back as json in the response

const getJsonRequestListener = function (req, res) {
  const newJoke = {
    categories: ["dev"],
    value:
      "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command.",
  };

  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  const response = JSON.stringify(newJoke);
  console.log(response);
  res.write(response);
};
// curl http://localhost:8000

const getJsonServer = http.createServer(getJsonRequestListener);
getJsonServer.listen(() => {
  console.log(`Server is running on http://localhost:8002`);
});
