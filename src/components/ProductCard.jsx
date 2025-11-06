import { Link } from "react-router-dom"

const ProductCard = ({product}) => {
  return (
   <Link to = {`/products/${product.id}`}>
    <div className="border border-slate-300 p-4 rounded-md w-fit mb-4">
     <p className="text-lg font-medium">
      {product.title}
     </p>
     <p>{product.price}</p>
     <p>{product.category}</p>
    </div>
   </Link>
  )
}
export default ProductCard