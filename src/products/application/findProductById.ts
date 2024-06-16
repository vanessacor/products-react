import { ProductRepository } from "../domain/productRepository";

export const findProductById = (
  productRepository: ProductRepository,
  id: string
) => {
  return productRepository.findById(id);
};
