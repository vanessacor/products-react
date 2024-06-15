import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { Book } from "./types"
import { Link } from "react-router-dom"

interface BookCardProps{
  book: Book
}

const BookCard: React.FC<BookCardProps>= ({book}) => {
  return (
    <Card>
      <CardHeader title={book.title}/>
      <CardContent>
        <Typography variant="body1">
          {book.author.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/books/${book.id}`} relative="path">See Details</Link>
      </CardActions>
    </Card>
  )
}

export default BookCard