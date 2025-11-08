import { useEffect, useState } from "react"
import axios from "axios"
import ProductList from "../components/ProductList"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {

  const [products,setProducts] = useState(null)

  useEffect(()=>{
         const fetchProducts = async()=>{
       try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        //const data = await response.json()
        // console.log(response.data)
        setProducts(response.data) // set product list received from api to prosuct state
       } catch (error) {
        console.log("error")
       }
       }
       fetchProducts()
  },[])  // dependencies array[] use garyo bhane product page mah gayo bhane ek choti matra call garxa
      
      console.log(products)

  return (
    <div className="container my-10">
        <h1 className="text-3xl font-semibold mb-10 text-slate-900">Product</h1>
            
            {/* product list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              
              {
                  products?.map(item=>(
                 <ProductCard key={item.id} item={item}/>
                
                ))
              }
              
            </div>    

     </div>
  )
}
export default ProductPage