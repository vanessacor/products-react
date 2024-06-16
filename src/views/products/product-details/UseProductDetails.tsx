import { useEffect, useState } from "react";
import { Product } from "../../../products/domain/product";
import { productRepositoryApi } from "../../../products/infrastructure/productApi";
import { useParams } from "react-router-dom";

export const UseProductDetails = () => {
  const [Product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { id } = useParams();
  const { findById } = productRepositoryApi();

  const getProduct = async () => {
    setIsLoading(true);
    try {
      if (!id) {
        setHasError(true);
        return;
      }
      const res = await findById(id);
      setProduct(res);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setHasError(true);
      setIsLoading(false);
      throw new Error();
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return {
    getProduct,
    Product,
    isLoading,
    hasError,
  };
};
