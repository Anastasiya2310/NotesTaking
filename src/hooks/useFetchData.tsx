import { useState, useEffect } from "react"
import { INotesList } from "../interfaces/interfaces"

const useFetchData = (url:string) => {
  const [data, setData] = useState<INotesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        
      } catch {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetchData;