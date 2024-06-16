import { z } from "zod";

export const bookDTOSchema = z.object({
  id: z.number(),
  title: z.string(),
  summary: z.string(),
  isbn: z.string(),
  genreId: z.number(),
  languageId: z.number(),
  authorId: z.number(),
  genre: z.object({
    id: z.number(),
    name: z.string(),
  }),
  language: z.object({
    id: z.number(),
    name: z.string(),
  }),
  author: z.object({
    id: z.number(),
    name: z.string(),
  }),
});

export const bookSchema = bookDTOSchema.pick({
  id: true,
  title: true,
  summary: true,
  isbn: true,
  genre: true,
  language: true,
  author: true,
});

export const bookListSchema = z.array(bookSchema);

export type Book = z.infer<typeof bookSchema>;
export type BookList = z.infer<typeof bookListSchema>;

// {
//   "id": 1,
//   "title": "Viagem do Elefante",
//   "summary": "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
//   "isbn": "911111111",
//   "authorId": 1,
//   "genreId": 1,
//   "languageId": 2,
//   "author": {
//     "id": 1,
//     "name": "Jose Saramago",
//     "booksId": [
//       1,
//       2
//     ]
//   },
//   "genre": {
//     "id": 1,
//     "name": "romance",
//     "booksId": [
//       1,
//       4
//     ]
//   },
//   "language": {
//     "id": 2,
//     "name": "portuguese",
//     "booksId": [
//       1,
//       3
//     ]
//   }
