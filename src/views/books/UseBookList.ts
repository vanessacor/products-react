import { useEffect, useState } from "react";
import { BookRepositoryApi } from "../../books/infrastructure/bookApi";
import { BookList } from "../../books/domain/book";

export const useBookList = () => {
  const [list, setList] = useState<BookList>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { getAll } = BookRepositoryApi();

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
