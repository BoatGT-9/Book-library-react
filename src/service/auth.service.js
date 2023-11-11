import axios from "axios";
const URL = import.meta.env.VITE_BASE_URL;
const API_URL = URL + "api/auth/";
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};

const login = async (username, password) => {
  const response = await axios.post(
    API_URL + "signin",
    { username, password },
    config
  );
  if (response.data.accessToken) {
    // Sign IN SuccessFully
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.accessToken));
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("token");
};
const register = async (username, email, password) => {
    console.log(username, email, password);
  return await axios.post(
    API_URL + "signup",
    { username:username[0], email:email[0], password:password[0] },
    config
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