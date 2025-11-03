const ProductCard = ({product}) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md w-fit mb-4">
     <p className="text-lg font-medium">
      {product.title}
     </p>
     <p>{product.price}</p>
     <p>{product.category}</p>
    </div>
  )
}
export default ProductCard