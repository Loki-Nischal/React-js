import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { useUserStore } from "../zustand/authStore"

const ProtectedRoute = () => {

    // user ko informstion chaini thau ma yo useAuth ra useUserstore use garna sakinxa
    // const {user} = useAuth()
    const {user} = useUserStore()


    if(!user){
        //redirect unauthenticated user to register page
       return <Navigate to="/login" replace />
    }

  return <Outlet /> //if user is authenticated... allow protected route access
}
export default ProtectedRoute