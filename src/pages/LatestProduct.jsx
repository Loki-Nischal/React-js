import { useQuery } from "@tanstack/react-query"
import axios  from "axios"
import ProductCard from "../components/ProductCard"
import { useProducts } from "../api/fetch-api"

const LatestProduct = () => {
    //   const{data,isLoading,isError,error} = useQuery({
    //    queryKey:['products'],  // use for caching -> must be unique // it helps to store the fetched data into the cache at frontend
    //    queryFn: async () => {
    //     const response = await axios.get('https://api.escuelajs.co/api/v1/products')
    //     return response.data
    //    },
    // //    staleTime: 2*60*1000  // cache refresh after every 2 min  goes to server to check data whether data is updated or not 
    // }) 


    const{data,isLoading,isError,error} =useProducts()

  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {
                  isLoading ? <p>Loading...</p>:
                  isError ? <p>{error.message}</p>:
                  data.slice(0,10).map(item=>(
                 <ProductCard key={item.id} item={item}/>
                
                ))
              }
              
              
            </div>   
  )
}
export default LatestProduct