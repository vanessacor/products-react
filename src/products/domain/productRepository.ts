import { Product } from "./product";

export interface ProductRepository {
  getProductById: (id: string) => Promise<Product>;
  getAllProducts: () => Promise<Product[]>;
}
