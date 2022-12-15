import React from 'react'
import { faker } from '@faker-js/faker';
import {uuid} from uuid;

const Home = () =>{
  const productsArray=[...Array(20)].map(()=>({
    id: faker.dataype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),

  })
  );
  console.log(productsArray);

  return <div className="productContainer">
    
  </div>
}

export default Home