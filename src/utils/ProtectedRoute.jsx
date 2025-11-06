import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const isLogedin = false
    
    if(!isLogedin){
        //redirect unauthenticated user to register page
        <Navigate to="/register" replace />
    }

  return <Outlet /> //if user is authenticated... allow protected route access
}
export default ProtectedRoute