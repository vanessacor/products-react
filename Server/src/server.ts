import express from "express";
import type { Express } from "express";
import dotenv from "dotenv";
import { router as productsRouter } from "./routes/products";
import { router as indexRouter } from "./routes/index";
import { Server } from "node:http";

dotenv.config();

export const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/api/products", productsRouter);

let server: Server | null = null;

export const serverStart = async () =>
  new Promise<void>((resolve, reject) => {
    if (server) {
      return reject(new Error("Serve alredy started"));
    }
    server = app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
      resolve();
    });
  });

export const serverClose = async (): Promise<void> => {
  new Promise<void>((resolve, reject) => {
    if (!server) {
      return reject(new Error("Server not on"));
    }
    server.close();
    resolve();
  });
};
