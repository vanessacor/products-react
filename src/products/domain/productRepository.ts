import { Product } from "./product";

export interface ProductRepository {
  findById: (id: string) => Promise<Product>;
  getAll: () => Promise<Product[]>;
}
