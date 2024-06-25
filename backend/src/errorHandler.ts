import { ErrorRequestHandler } from "express";
import { app } from "./server";

const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  console.log(error);
  res.status(500);
  res.json({ message: "unexpected error :-((((" });
};

app.use((req, res, next) => {
  res.status(404);
  res.json({ message: "not found :-(" });
});
app.use(errorHandler);
