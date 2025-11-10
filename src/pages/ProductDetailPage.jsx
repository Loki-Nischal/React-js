import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"


const ProductDetailPage = () => {

    //useParams() -> used to access dynamic URl parameters define in your route path
    const{id} = useParams()
    console.log(id)

  // fetching single product
  const {data,isLoading,isError,error} = useQuery({
    queryKey: ['product',id], 
    queryFn: async () =>{
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      return response.data
    }

  })

  if (isLoading) return <p>Loading...</p>
  if(isError) return <p>{error.message}</p>


  console.log(data)

  return (
    <div className="container my-10 flex gap-20 items-center"> 
      
       <div className="flex-1 rounded-md overflow-hidden shadow h-[60vh]">
        <img src ={data.images[0]} alt={data.title} className="w-full h-full object-cover" />
       </div>
        
        {/* // product details */}
        <div className="flex-1">

          <h1 className="text-4xl font-hold">
            {data.title}
          </h1>

          <p className="mt-3 text-gray-500 text-sm font-medium">
            {data.category.name}
          </p>

          <p className="text-2xl mt-3 text-gray-600">

            ${data.price}
          </p>

          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-1"> description</h3>
            <p className="text-gray-600 text-justify">
              {data.description}
            </p>
          </div>
               <button className="primary_button">Add to cart</button>

        </div>
      
    </div>
  )
}
export default ProductDetailPage