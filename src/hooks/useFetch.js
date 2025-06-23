// hooks/useFetch.js
import { useEffect, useState, useCallback } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      setHasError(true);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    hasError,
    error,
    refetch: fetchData, 
    setData
  };
};
