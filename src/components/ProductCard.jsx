import { Link } from "react-router-dom"

const ProductCard = ({item}) => (
  <Link to = {`/product/${item.id}`}>
  <div className="border border-slate-300 rounded-md p-4">
        <img src={item.images[0]}
         alt ={item.title} className="rounded-md shadow" />

         <h3 className="text-lg mt-3 font-medium text-gray-700 truncate">
          {item.title} 
          </h3>
         <p className="text-sm text-gray-500">${item.price}</p>
      </div>
  </Link>
)
export default ProductCard