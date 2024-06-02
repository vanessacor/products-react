import { useState, useEffect } from "react";

interface UseFetchResult {
  data: any | null;
  isLoading: boolean;
  error: any | null;
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    const timeoutId = setTimeout(fetchData, 1000);

    return () => clearTimeout(timeoutId);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
