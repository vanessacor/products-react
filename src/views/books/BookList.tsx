import { CircularProgress, Container, Grid } from "@mui/material";
import useFetch from "../../services/fetchService";
import BookCard from "./BookCard";
import { Book } from "../../books/domain/book";
import { useBookList } from "./UseBookList";

const BookList = () => {
  const {list, isLoading, hasError} = useBookList()
  

  return (
    <Container maxWidth="md">
      {hasError && <p>Error</p>}
      {isLoading && <CircularProgress/>}
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {list &&
          list.map((book: Book) => (
            <Grid item xs={12} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default BookList;
