import axios from "axios";
const URL = import.meta.env.VITE_BASE_URL;
const API_URL = URL + "/api/auth/";
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const login = async (username, password) => {
  console.log(username, password);
  const response = await axios.post(
      API_URL + "signin",
      { username, password },
      config
  )
      if(response.data.accessToken){
          //signin success
          localStorage.setItem("user", JSON.stringify(response.data))
          localStorage.setItem("token", JSON.stringify(response.data.accessToken))
      }
      return response;
}
const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token");
};
const register = async (username, email, password) => {
    console.log(username[0],email[0],password[0]);
  return await axios.post(
    API_URL + "signup",
    { username:username, email:email, password:password },
    config,
    // console.log(username)
    );
  };
const getCrrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const authService = {
  login,
  register,
  getCrrentUser,
  logout,
};
export default authService;