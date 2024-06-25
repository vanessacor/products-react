import { CircularProgress, Container } from "@mui/material";
import { useProductList } from "./UseProductPage";
import { ProductTable } from "./components/ProductTable";
import { ProductContext } from "./ProductContext";

export const ProductList = () => {
  const { list, isLoading, hasError } = useProductList();

  return (
    <ProductContext.Provider value={list}>
      <Container maxWidth="md">
        {hasError && <p>Error</p>}
        {isLoading && <CircularProgress />}
        <ProductTable />
      </Container>
    </ProductContext.Provider>
  );
};
