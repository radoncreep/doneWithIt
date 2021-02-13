import React, { useState } from 'react';
import listingsApi from '../api/listings';


export default useApi = () => {
    const [ data, setData ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    
    const request = async () => {
      setLoading(true);
      const response = await listingsApi.getListings();
      // console.log(response)
      setLoading(false);
  
      if (!response.ok) return setError(true);
       
      setError(false);
      setData(response.data);
    };

    return { request, data, error, loading };
}