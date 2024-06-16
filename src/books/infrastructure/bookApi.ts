import { ZodError } from "zod";
import { Book, bookListSchema, bookSchema } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export const BookRepositoryApi = (): BookRepository => {
  return {
    findById,
    getAll,
  };
};

async function findById(id: string) {
  try {
    const result = await fetch(
      `http://localhost:8000/books/${id}?_embed=books`
    );
    const book: Book = bookSchema.parse(result);
    return book;
  } catch (error: unknown | ZodError) {
    console.error(error);
    throw new Error();
  }
}
async function getAll() {
  try {
    const result = await fetch(
      `http://localhost:8000/books?_embed=author&_embed=genre&_embed=language`
    );
    const res = await result.json();
    const book: Book[] = bookListSchema.parse(res);
    return book;
  } catch (error: unknown | ZodError) {
    console.error(error);
    throw new Error();
  }
}
