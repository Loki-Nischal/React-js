
const Navbar = () => {
  return (
<div className="border-b border-slate-300 py-4">
  <div className="flex justify-between items-center container " >
      <h1 className="  text-slate-800 font-bold text-2xl">
          E-store
      </h1>
      {/* navbar */}
      <ul className="flex gap-6 text-slate-700 font-medium">
        <li>Home</li>
        <li>Product</li>
        <li>Contect</li>
        <li>About</li>
      </ul>
      {/* button */}
         <div className="space-x-4">
           <button className="primary_button">Register</button>
           <button className="outline_button">Login</button>
         </div>
   </div>
 </div>
  )
}
export default Navbar


















































































//  //rafce shortcut to create component
// import { Link } from "react-router-dom"

// const Navbar = () => {
//   return (
//       <nav className="bg-slate-800 text-white px-6 py-3 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link to = '/'>
//           <div className="text-2xl font-bold cursor-pointer">MyLogo</div>
//         </Link>
      

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-8 text-slate-200">
//           <Link to = "/">       
//            <li className="hover:text-white cursor-pointer">Home</li>
//           </Link>


//           <Link to = "/product">       
//            <li className="hover:text-white cursor-pointer">Product</li>
//           </Link>
          
          
//          <Link to = '/about'>
//             <li className="hover:text-white cursor-pointer">About</li>
//          </Link>

//           <li className="hover:text-white cursor-pointer">Services</li>
//           <li className="hover:text-white cursor-pointer">Contact</li>
//         </ul>

//         {/* Auth Buttons */}
//         <div className="space-x-3">
//           <button className="px-4 py-2 rounded-lg border border-slate-400 hover:bg-slate-700">
//             Login
//           </button>
//          <Link to = '/register'>
//           <button className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700">
//             Register
//           </button>
//          </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar