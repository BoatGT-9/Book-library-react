import { useContext, createContext, useState } from "react";
// import { json } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const [username, setusername] = useState(user ? user.username : "");
  const [Token,setToken] = useState( token? token:"")
  const [roles,setRoles] = useState( user? user.roles:"")

  return (
    <AuthContext.Provider value={{ user,username,setusername,Token,setToken,roles,setRoles }}>
      {children}
    </AuthContext.Provider>
  );
};

export const auth = ()=>{
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("ไม่มี provider นะ ");
  }
  return context;
}
