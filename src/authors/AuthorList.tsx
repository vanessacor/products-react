import {
  Alert,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import useFetch from "../services/fetchService";
import LinkRouter from "../views/navigation/NavLinkRouter";

const AuthorItem = ({author}) => {
  return (
    <ListItem key={author.id}>
      <ListItemButton to={`/authors/${author.id}`} component={LinkRouter}>
        <Typography variant="body2">{author.name}</Typography>
      </ListItemButton>
    </ListItem>
  );
};
function AuthorList() {
  const {
    data: authors,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/authors?_embed=books");


  // const authorList = () => (<List>{authors.map((author) => authorItem(author))}</List>);

  return (
    <Container maxWidth="md">
      {error && <Alert severity="error">{error}</Alert>}
      {isLoading && <CircularProgress />}
 
      <List>
        {authors &&
          authors.map((author) => (
           <AuthorItem author={author}/>
          ))}
      </List>
    </Container>
  );
}

export default AuthorList;
