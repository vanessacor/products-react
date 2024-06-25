import { Typography, Container, CircularProgress } from "@mui/material";
import { UseProductDetails } from "./UseProductDetails";

export const ProductDetail: React.FC = () => {
  const { Product, isLoading, hasError } = UseProductDetails();

  return (
    <Container>
      {hasError && <p>Error</p>}
      {isLoading && <CircularProgress />}
      {Product && (
        <Container maxWidth="sm">
          <Typography variant="h3">{Product.title}</Typography>
          <Typography variant="subtitle1">{Product.price}</Typography>

          <Typography variant="body1">Genre: {Product.category}</Typography>
          <Typography variant="body1">Genre: {Product.description}</Typography>
        </Container>
      )}
    </Container>
  );
};
