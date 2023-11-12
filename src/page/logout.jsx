import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../service/auth.service";

const logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
  };
  setTimeout(() => {
    handleLogout();
  }, 3 * 100);

  return (
  <div> Logout</div>
  );
};

export default logout;
