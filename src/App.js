import "./App.css";
import Header from "./Component/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import { useState } from "react";
function App() {

  const [cart, setCart] = useState([]);
  
  
  return (
    <div className="App">
      <Header />
       <Routes>
        <Route exact path="/">
        <Home cart={cart} setCart={setCart}/>
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} setCart={setCart}/> 
        </Route>
      </Routes>
    </div>
  );
}
export default App;