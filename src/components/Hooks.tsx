import axios from 'axios';
import { useEffect, useState } from 'react'
import {Result} from '../components/model'


const BASE_URL: string = 'https://api.nytimes.com/svc/';
const API_KEY: string = 'nv9lcfwnE6J3b2ouzof4W2Zdyx0WZ71g';

interface FetchState {
    data: Data | null;
    loading: boolean;
    error: Error | null | any;
  }

interface Error {
    message: string;
}

interface Data {
    status: string;
    copyright: string;
    section: string;
    last_updated: string;
    num_results: number;
    results: Array<Result>;
}

  

const Hooks = (url: string) : FetchState => {

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState<Error | null>(null);


    useEffect(() =>{
      const fetchData = async() =>{
        try{
            const response = await axios.get(BASE_URL + url + API_KEY);
            setData(response.data);
            setLoading(false);
        }catch(err:any) {
            setError({message: err.message});
            setLoading(false);
        }
      };
      fetchData();  
    }, [url])
  
    return { data, loading, error}
}

export default Hooks