import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//function to fecth all product
export const useProducts =() =>{
  

    return useQuery({
       queryKey:['products'],  // use for caching -> must be unique // it helps to store the fetched data into the cache at frontend
       queryFn: async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        return response.data
       },
    //    staleTime: 2*60*1000  // cache refresh after every 2 min  goes to server to check data whether data is updated or not 
    }) 
}

export const useProduct =()=>{}