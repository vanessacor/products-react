type Book = {
  id: number;
  title: string;
};
export interface Author {
  id: number;
  name: string;
  books: Book[];
}
