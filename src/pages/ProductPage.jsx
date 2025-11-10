import { useEffect, useState } from "react"
import axios from "axios"
import ProductList from "../components/ProductList"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {

  const [products,setProducts] = useState(null)
  const [isLoading,setisLoading] = useState(false)
  const [error,setError] = useState("")

  useEffect(()=>{
         const fetchProducts = async()=>{
          setisLoading(true)
          setError("")
       try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        //const data = await response.json()
        // console.log(response.data)
        setProducts(response.data) // set product list received from api to product state
       } catch (error) {
        console.log(error)
        setError("Error fectching data") //set error messGE TO error state if error occurs
       }finally{
        setisLoading(false)
       }
       }
       fetchProducts()
  },[])  // dependencies array[] use garyo bhane product page mah gayo bhane ek choti matra call garxa
      // if(error) return <p>{error}</p>
      // console.log(products)
      // if(isLoading) return <p>Loading.....</p>

  return (
    <div className="container my-10">
        <h1 className="text-3xl font-semibold mb-10 text-slate-900">Product</h1>
            
            {/* product list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              
              {
                  isLoading ? <p>Loading...</p>:
                  error ? <p>{error}</p>:
                  products?.map(item=>(
                 <ProductCard key={item.id} item={item}/>
                
                ))
              }
              
            </div>    

     </div>
  )
}
export default ProductPage