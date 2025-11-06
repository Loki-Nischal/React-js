import { useParams } from "react-router-dom"

const ProductDetailPage = () => {

    //useParams() -> used to access dynamic URl parameters define in your route path
    const{id} = useParams()
    console.log(id)

  return (
    <div>ProductDetailPage:{id}</div>
  )
}
export default ProductDetailPage