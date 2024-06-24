import express from "express";
import { Request, Response } from "express";

export const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res
    .set({
      "Access-Control-Allow-Origin": "*",
    })
    .status(200)
    .send("Hello world");
});
