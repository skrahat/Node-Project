import express, { Response, Request } from "express";
import { handler } from "./testApi";

const app = express();
const test = handler(1, 2);
app.get("/", (req: Request, res: Response) => {
  res.send("hello testing");
});
export {};
app.listen(3000, () => console.log("Express Server running"));
