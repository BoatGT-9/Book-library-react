import { useState } from "react";
import "./App.css";
import Book from "./page/Books";
import Add from "./page/Add";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import  Edit  from "./page/Edit.jsx";
import Login from "./page/Login.jsx";
// import Card from "./components/Card";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Book />} />
          <Route path="/Add" element={<Add/>}/>
          <Route path="/edit/:bookId" element={<Edit/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
