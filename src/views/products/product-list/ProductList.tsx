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
      <Grid container spacing={2}>
        {list &&
          list.map((product: Product) => (
            <Grid item>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
