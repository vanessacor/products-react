import express from "express";
import { Request, Response } from "express";
import { products } from "../mock-data";

export const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res
    .set({
      "Access-Control-Allow-Origin": "*",
    })
    .send(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res
      .set({
        "Access-Control-Allow-Origin": "*",
      })
      .status(404)
      .send(`Product with id number ${id} was not found`);
  } else res.send(product);
});

router.post("/", (req: Request, res: Response) => {
  const { title, price, description, category, image, rating } = req.body;
  // need validations
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
  res
    .set({
      "Access-Control-Allow-Origin": "*",
    })
    .status(201)
    .send(product);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.status(404).send(`Product with the id ${id} not found`);
  } else {
    const { title, price, description, category, image, rating } = req.body;
    const index = products.findIndex((product) => product.id === id);
    products[index] = {
      id: product.id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    res
      .set({
        "Access-Control-Allow-Origin": "*",
      })
      .status(200)
      .send(product);
  }
});
