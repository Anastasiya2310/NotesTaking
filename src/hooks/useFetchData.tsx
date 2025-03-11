import { useState, useEffect } from "react"
import { INotesList } from "../interfaces/interfaces"
import axios from "axios";

const useFetchData = (url:string) => {
  const [data, setData] = useState<INotesList | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        
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