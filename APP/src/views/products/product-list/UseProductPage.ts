import { useEffect, useState } from "react";
import { productRepositoryApi } from "../../../products/productApi";
import { ProductList } from "../../../products/models";

export const useProductList = () => {
  const [list, setList] = useState<ProductList>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { getAllProducts } = productRepositoryApi();
  // filteredList -> sortyBy, and searchTerms

  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await getAllProducts();
      setList(res);
      setIsLoading(false);
    } catch (e) {
      setHasError(true);
      setIsLoading(false);
      throw new Error();
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    setList,
    isLoading,
    hasError,
  };
};
