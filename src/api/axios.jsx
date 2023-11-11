import axios from "axios";

const instance  = axios.create({
  baseURL: "https://extinct-ruby-cap.cyclic.app",
  auth: {
    username: "Admin",
    password: "admin12345",
  }
});

export default  instance ;
