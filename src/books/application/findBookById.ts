import { BookRepository } from "../domain/bookRepository";

export const findBookById = (bookRepository: BookRepository, id: string) => {
  return bookRepository.findById(id);
};
