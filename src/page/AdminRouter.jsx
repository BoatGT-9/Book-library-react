import { Navigate } from "react-router-dom";
import { auth } from "../context/Authcontext";

const AdminRoute = ({children}) =>{
    const {user} = auth();
    if(!user){
        return <Navigate to="/login"/>
    }
    if( !user.roles.includes("ROLES_ADMIN")) return <Navigate to={"/notAllow"}/>
    return children
}

export default AdminRoute;