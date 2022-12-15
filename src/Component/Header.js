import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css";

function Header() {
  return (
    <div>
      <span className='header'> React Context API Tutorial</span>
      <ul className='nav'>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li >
          <Link to= "/cart"></Link>
        </li>
      </ul>
  
    </div>
  )
}

export default Header