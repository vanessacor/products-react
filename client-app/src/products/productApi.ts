import { ZodError } from "zod";
import { Product, ProductListSchema, ProductSchema } from "./models";

type ProductRepository = {
  getProductById: (id: string) => Promise<Product>;
  getAllProducts: () => Promise<Product[]>;
};

export const productRepositoryApi = (): ProductRepository => {
  async function getProductById(id: string) {
    try {
      const result = await fetch(`http://localhost:5000/api/products/${id}`);
      const res = await result.json();
      const product = ProductSchema.parse(res);
      return product;
    } catch (error: unknown | ZodError) {
      console.error(error);
      throw new Error();
    }
  }
  async function getAllProducts() {
    try {
      const result = await fetch("http://localhost:5000/api/products");
      const res = await result.json();
      const products = ProductListSchema.parse(res);
      return products;
    } catch (error: unknown | ZodError) {
      console.error(error);
      throw new Error();
    }
  }

  return {
    getProductById,
    getAllProducts,
  };
};
