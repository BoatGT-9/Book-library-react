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
// import Card from "./components/Card";
function App() {
  return (
    <>
      <Routes>
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
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
