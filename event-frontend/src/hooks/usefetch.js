import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong.') ;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);


  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Something went wrong.'); 
    } finally{
      setLoading(false);
    }
  };

  return { data, loading, error, reFetch };
};

export default useFetch;