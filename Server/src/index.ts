import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { products } from "./mock-data";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello world");
});

app.get("/api/products", (_req: Request, res: Response) => {
  res.send(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products[id];
  if (!product) {
    res.status(404).send(`Product with id number ${id} was not found`);
  } else res.send(products[id]);
});

app.post("api/products", (req: Request, res: Response) => {
  const { title, price, description, category, image, rating } = req.body;
  const product = {
    id: products.length + 1,
    title,
    price,
    description,
    category,
    image,
    rating,
  };
  products.push(product);
  console.log("POST", products);
  res.status(200).send(product);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
