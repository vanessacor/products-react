import { useEffect, useState } from "react";
import { productRepositoryApi } from "../../../products/infrastructure/productApi";
import { ProductList } from "../../../products/domain/product";

export const useProductList = () => {
  const [list, setList] = useState<ProductList>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { getAll } = productRepositoryApi();

  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await getAll();
      setList(res);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
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
