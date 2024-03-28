import axios from "axios";

export const BASE_URL = "http://api.nytimes.com/svc/";
const API_KEY = "nv9lcfwnE6J3b2ouzof4W2Zdyx0WZ71g"

const fetchApi = async(url : string) => {

    try{
        const data  = await axios.get(BASE_URL + url + API_KEY);
        return data;
    }catch (err){
        console.error("error:", err);
        throw err; 
    }
}

export default fetchApi;