import ProductCard from "./ProductCard";

const ProductList = () => {
    const products =[{
        id:101,
        title:"Mechanical mouse",
        price:100,
        category:"electronics"
    },
    {
        id:102,
        title:"Mechanical keyboard",
        price:150,
        category:"electronics"
    },
    {
        id:103,
        title:"Nike",
        price:10000,
        category:"shoes"
    }
];
   const popularproducts =[{
        id:203,
        title:"Iphone",
        price:100005,
        category:"Phone"
    },
    {
        id:204,
        title:"Onepluse",
        price:150000,
        category:"phone"
    },
    {
        id:203,
        title:"addidas",
        price:10000,
        category:"shoes"
    }
];
  return (
    <div>
        <h1 className="text-4xl font-bold mb-4">New Arivals</h1>
        {
            products.map(product =>(
                // <div 
                // className="border border-slate-300 p-4 rounded-md w-fit mb-4"
                // key={product.id}
                // >
                //      <p className="text-lg font-medium">{product.title}</p>
                //      <p>${product.price}</p>
                //      <p>{product.category}</p>
                // </div>
                <ProductCard key={product.id} product ={product}/>
            ))
              
            
        }
        <div>
            <h1 className="text-4xl font-bold mb-4">
                Popular Products
            </h1>
          
             {
            popularproducts.map(product =>(
                // <div 
                // className="border border-slate-300 p-4 rounded-md w-fit mb-4"
                // key={product.id}
                // >
                //      <p className="text-lg font-medium">{product.title}</p>
                //      <p>${product.price}</p>
                //      <p>{product.category}</p>
                // </div>
                  <ProductCard key={product.id} product={product} />
            ))
              
            
        } 
        </div>
    </div>
  )
}

export default ProductList