import express, { Request, Response } from "express";
const app = express();
const cors = require("cors");

// typescript comes with a really powerful compiler instead of babel
// minify compress everything
// type safety

// Variables
const host = "localhost";
const port = 8000;

type ResponseData = {
  message: string;
  endingMessage: string;
};

// Get JSON
app.get(
  "/",
  cors({
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  }),
  (req, res) => {
    const responseData: ResponseData = {
      message: "Testingg",
      endingMessage: "12",
    };

    res.status(200);
    res.json(responseData);
    // res.send("bad request");
  }
);

// Post JSON
function callBack(req: Request, res: Response) {
  res.json({ message: "This is a JSON Response" });
}
app.post("/", callBack);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
