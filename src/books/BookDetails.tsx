import { Typography,Container, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import PageLayout from "../layouts/Pagelayout";
import useFetch from "../services/fetchService";

const BookDetail: React.FC = () => {
  const { id } = useParams();

  const {
    data: book,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/books/${id}?_expand=author&&_expand=language&&_expand=genre`);

  return (
    <Container>
      {error && <p>{error}</p>}
      {isLoading && <CircularProgress/>}
      {book && (
        <Container maxWidth="sm">
          <Typography variant="h3">{book.title}</Typography>
          <Typography variant="subtitle1">{book.summary}</Typography>
          {book.author && (
            <Typography variant="body1">Author: {book.author.name}</Typography>
          )}
          {book.genre &&(<Typography variant="body1">Genre: {book.genre.name}</Typography>)}
          <Typography variant="body1">ISBN: {book.isbn}</Typography>
          {book.language &&(<Typography variant="body2">Language: {book.language.name}</Typography>)}
        </Container>
      )}
    </Container>
  );
};

export default BookDetail;
