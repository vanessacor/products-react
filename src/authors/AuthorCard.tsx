import { Card, CardActions, CardContent, CardHeader, List, ListItem, ListItemButton,  Typography } from "@mui/material"
import type { Author } from "./types"
import { Link } from "react-router-dom"
import LinkRouter from "../navigation/NavLinkRouter"

interface AuthorCardProps{
  author: Author
}

const AuthorCard: React.FC<AuthorCardProps>= ({author}) => {
  return (
    <Card>
      <CardHeader title={author.name}/>
      <CardContent>
        <List >
          {author.books && author.books.map((book) => 
          <ListItem>
            <ListItemButton to={`/books/${book.id}`} component={LinkRouter}>
              <Typography variant="body2">
                {book.title}
              </Typography>
            </ListItemButton>
          </ListItem>
          )}
        </List>
      </CardContent>
      <CardActions>
        <Link to={`/authors/${author.id}`} relative="path">See Details</Link>
      </CardActions>
    </Card>
  )
}

export default AuthorCard