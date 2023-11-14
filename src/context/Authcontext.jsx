import { useContext, createContext, useState } from "react";
// import { json } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const [username, setusername] = useState(user ? user.username : "");
  const [Token,setToken] = useState( token? token:"")
  const [role,setRole] = useState( user? user.role:"")

  return (
    <AuthContext.Provider value={{ username,setusername,Token,setToken,role,setRole }}>
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
