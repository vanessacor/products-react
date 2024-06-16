import { CircularProgress, Container, Grid } from "@mui/material";
import { ProductCard } from "../ProductCard";
import { Product } from "../../../products/domain/product";
import { useProductList } from "./UseProductList";

export const ProductList = () => {
  const { list, isLoading, hasError } = useProductList();

  return (
    <Container maxWidth="md">
      {hasError && <p>Error</p>}
      {isLoading && <CircularProgress />}
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {list &&
          list.map((Product: Product) => (
            <Grid item xs={12} key={Product.id}>
              <ProductCard Product={Product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
