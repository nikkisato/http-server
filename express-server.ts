import express, { Request, Response } from "express";
const app = express();

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
app.get("/", (req, res) => {
  const responseData: ResponseData = {
    message: "Testingg",
    endingMessage: "12",
  };

  res.status(400).json(responseData);
});

// Post JSON
function callBack(req: Request, res: Response) {
  res.json({ message: "This is a JSON Response" });
}
app.post("/", callBack);

// Get Blocking JSON
app.get("/blocking", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  let sum = 0;
  for (let i = 1; i <= 100000000; i++) {
    sum = sum + i;
  }
  res.end(`Finished Blocking ${Math.random()}`);
});
// tried to avoid this when using node

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
