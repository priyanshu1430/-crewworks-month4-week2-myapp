import React from 'react'

function Cart({cart,setCart}) {
  return (
    <div>
    <span style={{fontSize:30}}>
      My Cart 
    </span>
    <br />
    <span style={{fontsize:30}}>Total Rs.100</span>
    <div className='productContainer'></div>
    </div>

  )
}

export default Cart 