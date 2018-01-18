import React, { Component } from 'react'
import './Cart.css'

class Cart extends Component {
  render () {
    const msg = `Infelizmente você não pode comprar estes produtos de verdade,
    eu só estou tentando conseguir um emprego :)`

    return (
      <section className="Cart">
        <div className="Box">
          <div className="title">
            <h1>Carrinho</h1>
            <span onClick={this.props.close}>x</span>
          </div>

          <div className="holder">
            <div className="products">
              {this.props.products.map((product, index) => (
                <div key={product.id} className="CartProduct">
                  <div>{product.name}</div>
                  <div>R${product.on_sale ? product.sale_price : product.price},00 <span onClick={() => this.props.removeCart(index)}>x</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="price">Total: R${this.props.price},00</div>

          <button onClick={() => alert(msg)}>Comprar</button>
        </div>
      </section>
    )
  }
}

export default Cart
