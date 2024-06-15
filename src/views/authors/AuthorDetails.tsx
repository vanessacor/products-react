import { Typography, Container, CircularProgress } from "@mui/material";
import useFetch from "../../services/fetchService";
import { useParams } from "react-router-dom";

const AuthorDetail: React.FC = () => {
  const { id } = useParams();

  const {
    data: author,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/authors/${id}?_embed=books`);


  return (
    <Container>
      {error && <p>{error}</p>}
      {isLoading && <CircularProgress/>}
      {author && (
        <Container maxWidth="sm">
          <Typography variant="h2">{author.name}</Typography>
          {author.books &&
            author.books.map((book) => 
            <Typography variant="body1" key={book.id}>{book.title}</Typography>)}
        </Container>
      )}
    </Container>
  );
};

export default AuthorDetail;
