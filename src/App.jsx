// import { useState } from "react";
import "./App.css";
import Book from "./page/Books";
import Add from "./page/Add";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Edit from "./page/Edit.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Logout from "./page/logout.jsx";
import AdminRoute from "./page/AdminRouter.jsx";
import { AuthProvider } from "./context/Authcontext.jsx";
import ProtectedRoute from "./page/ProtectedRoute.jsx";
import Profile from "./page/Profile.jsx"

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/1" element={<ProtectedRoute/>}></Route>          
          <Route path="/" element={<Layout />}>
            <Route index element={<Book />} />
            <Route
              path="/Add"
              element={
                <AdminRoute>
                  <Add />
                </AdminRoute>
              }
            />
            <Route
              path="/edit/:bookId"
              element={
                <AdminRoute>
                <Edit />
               </AdminRoute>
              }
            />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
