import { useState, useEffect, useCallback } from "react"
import { INotesList } from "../interfaces/interfaces"
import axios from "axios";

const useFetchData = (url:string) => {
  const [data, setData] = useState<INotesList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (showLoading = true) => {
    if (showLoading) setLoading(true);
    setError(null);

    try {
      const response = await axios.get<INotesList>(url);
      setData(response.data);
    } catch {
      setError("Failed to fetch data");
    } finally {
      if (showLoading) setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData(true);
  }, [fetchData]);

  return { data, loading, error, refetch: () => fetchData(false) };
};

export default useFetchData;