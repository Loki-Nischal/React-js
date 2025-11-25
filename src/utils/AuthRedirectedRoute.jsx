
import { Navigate, Outlet, useActionData } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const AuthRedirectedRoute = () => {

    // const {user} = useAuth()
    const {user} = useUserStore()

   if(user){
    return <Navigate to = "/" replace />
   }

  return <Outlet /> //if user is not authenticated... allow access to auth pages
}
export default AuthRedirectedRoute