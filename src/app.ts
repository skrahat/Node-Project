import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("hello testing");
});

app.listen(3000, () => console.log("Express Server running"));
