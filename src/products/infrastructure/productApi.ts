import { ZodError } from "zod";
import { Product, ProductListSchema, ProductSchema } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export const productRepositoryApi = (): ProductRepository => {
  return {
    findById,
    getAll,
  };
};

async function findById(id: string) {
  try {
    const result = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await result.json();
    const product: Product = ProductSchema.parse(res);
    return product;
  } catch (error: unknown | ZodError) {
    console.error(error);
    throw new Error();
  }
}
async function getAll() {
  try {
    const result = await fetch("https://fakestoreapi.com/products");
    const res = await result.json();
    const product: Product[] = ProductListSchema.parse(res);
    return product;
  } catch (error: unknown | ZodError) {
    console.error(error);
    throw new Error();
  }
}
