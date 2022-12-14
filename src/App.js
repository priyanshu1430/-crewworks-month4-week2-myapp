import './App.css';
import Header from './Component/Header';
import {Routes, Route } from 'react-router-dom';
import Cart from './Component/Cart';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path = "/" compnent={<Home/>}/>
     <Route path ="/cart" component={<Cart/>}/>
    </Routes>

     </div>
  );
}

export default App;
