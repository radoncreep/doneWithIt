import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [ data, setData ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    // console.log(response)
    setLoading(false);
    
    setData(response.data);
    setError(!response.ok);
    
    return response;
  };

  return { request, data, error, loading };
};