import {auth} from "../context/Authcontext";

const ProtectedRoute = ({children}) =>{
    const {role,Token} = auth ();
    console.log(role,Token);
    return children
}
export default ProtectedRoute;