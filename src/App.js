import "./App.css";
import Header from "./Component/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import { useState } from "react";
function App() {

    
  
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
export default App;