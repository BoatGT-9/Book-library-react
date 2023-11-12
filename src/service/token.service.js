import { json } from "react-router-dom";

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // ? เป้นการเข้าถึงหรือเป็นการถามว่ามีค่าไหม
  return user?.refreshToken;
};
const getLocalAcessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.acessToken;
};

const SetLocalAccessToken = (token) => {
    const user = JSON.parse(localStorage.getItem("user"));
    user.acessToken= token;
    localStorage.setItem("user",json.stringify(user));
    return 
  //     const accessToken = 'your_access_token_here';
  //     SetLocalAccessToken(accessToken);
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};
const setUser = (user) => {
    localStorage.setItem("user",JSON.stringify(user))  
};
const removeUser = ()=>{
    localStorage.removeItem("user")
};

const TokenService = {
    getLocalRefreshToken,
    getLocalAcessToken,
    SetLocalAccessToken,
    getUser,
    setUser,
    removeUser
}
 export default TokenService;