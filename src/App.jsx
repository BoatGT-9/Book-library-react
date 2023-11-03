import { useState } from "react";
import "./App.css";
import Book from "./page/Books";
import Add from "./page/Add";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Book />} />
          <Route path="/Add" element={<Add/>}/>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
