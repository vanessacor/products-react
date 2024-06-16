import { Book } from "./book";

export interface BookRepository {
  findById: (id: string) => Promise<Book>;
  getAll: () => Promise<Book[]>;
}
