import React from 'react'
import './Product.css'
import shoppingCart from 'assets/shopping-cart.png'

const Product = (props) => {
  return (
    <div className="Product">
      <div id="image"><img src={props.image} width="200" alt={props.name} /></div>
      <div id="name">{props.name}</div>
      <div id="price_button">
        <div id="price">
          <div>
            <div className={props.on_sale ? 'sale' : ''}>R$ {props.price}</div>
            { props.on_sale && <div>&nbsp;R$ {props.sale_price}</div> }
          </div>
          <div>até {props.installments}</div>
        </div>
        <div id="button"><button onClick={props.click}><img width="25" src={shoppingCart} alt="Shopping Cart" /></button></div>
      </div>
    </div>
  )
}

export default Product
