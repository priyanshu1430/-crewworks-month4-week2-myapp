import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import SingleProduct from "./SingleProduct";
import "./Style.css"

faker.seed(100);



const Home = ({cart, setCart}) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));
  
  

  const [products] = useState(productsArray)
  
  return <div className="productContainer">
    {products.map((prod) =>(
      <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
    ))}
  </div>;
};
export default Home;