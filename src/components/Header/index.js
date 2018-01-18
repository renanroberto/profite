import React from 'react'
import logo from 'assets/logo.png'
import cartIcon from 'assets/cart-icon.png'
import './Header.css'

const Header = (props) => (
  <div className="Header">
    <img src={logo} alt="profite" width="150" />
    <div onClick={props.click} className="CartIcon">
      <img src={cartIcon} alt="carrinho" width="30" />
      {props.count !== 0 && <span>{props.count}</span>}
    </div>
  </div>
)

export default Header
