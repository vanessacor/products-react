import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Product } from "../../products/domain/product"

interface ProductCardProps{
  Product: Product
}

export const ProductCard: React.FC<ProductCardProps>= ({Product}) => {
  return (
    <Card>
      <CardHeader title={Product.title}/>
      <CardContent>
        <Typography variant="body1">
          {Product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/Products/${Product.id}`} relative="path">See Details</Link>
      </CardActions>
    </Card>
  )
}

