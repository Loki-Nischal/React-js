
import ProductCard from "../components/ProductCard"
import { useProducts } from "../api/fetch-api"


const Products = () => {
    // fetching data using react data
    // data -> the data returned from your api
    //isLoading -> handle loading... toggle loading loading state true or false
    //error -> show error message if error presents
    //isError -> handle if error is true or false
    const{data,isLoading,isError,error} = useProducts()
    
   

  return (
      <div className="container my-10">
        <h1 className="text-3xl font-semibold mb-10 text-slate-900">Products</h1>
            
            {/* product list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {
                  isLoading ? <p>Loading...</p>:
                  isError ? <p>{error.message}</p>:
                  data.slice(0,10).map(item=>(
                 <ProductCard key={item.id} item={item}/>
                
                ))
              }
              
              
            </div>    

     </div>
  )
}
export default Products