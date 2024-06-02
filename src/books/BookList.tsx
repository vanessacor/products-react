import { CircularProgress, Container, Grid } from "@mui/material";
import useFetch from "../services/fetchService";
import BookCard from "./BookCard";
import { Book } from "./types";

const BookList = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/books?_expand=author");

  return (
    <Container maxWidth="md">
      {error && <p>{error}</p>}
      {isLoading && <CircularProgress/>}
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {books &&
          books.map((book: Book) => (
            <Grid item xs={12} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default BookList;
