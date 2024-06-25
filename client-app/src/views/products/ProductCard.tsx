import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../products/models";

interface ProductCardProps {
  product: Product;
}

const truncateDescription = (string) => {
  const MAX_CHAR_ALLOWED = 100;
  return string.length >= MAX_CHAR_ALLOWED
    ? `${string.slice(0, MAX_CHAR_ALLOWED - 1)}...`
    : string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.title} />
      <CardMedia
        height="200"
        component="img"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1">
          {truncateDescription(product.description)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/products/${product.id}`} relative="path">
          See Details
        </Link>
      </CardActions>
    </Card>
  );
};
