import React, { Component } from 'react'
import './Shop.css'

import api from 'services/api'

import Header from 'components/Header'
import Filters from 'components/Filters'
import OrderBy from 'components/OrderBy'
import Products from 'components/Products'
import Cart from 'components/Cart'
import Notification from 'components/Notification'

class Shop extends Component {
  state = {
    products: [],

    showCart: false,
    onCart: [],
    totalPrice: 0,

    notification: false,

    filters: {
      colors: [],
      sizes: [],
      price: ''
    },

    order: ''
  }

  componentDidMount () {
    this.requestHandler()
  }

  requestHandler = async () => {
    const res = await fetch(api.url)
    const data = await res.json()
    let products = data.products

    products = products.map(product => ({ ...product, on_cart: false }))

    this.setState({ products })
  }

  notificationHandler = () => {
    if (!this.state.notification) {
      this.setState({ notification: true })
      setTimeout(() => this.setState({ notification: false }), 2000)
    }
  }

  addCart = (index) => {
    const products = [...this.state.products]
    const onCart = []
    let totalPrice = this.state.totalPrice

    products[index].on_cart = true

    products.forEach(product => {
      if (product.on_cart) onCart.push(product)
    })

    if (products[index].on_sale) totalPrice += Number(products[index].sale_price)
    else totalPrice += Number(products[index].price)

    this.setState({ products, onCart, totalPrice })
  }

  removeCart = (index) => {
    const products = [...this.state.products]
    const onCart = []
    let totalPrice = this.state.totalPrice

    const id = this.state.onCart[index].id
    const prod_index = this.state.products.findIndex((el, i, arr) => {
      if (el.id === id) return true
      else return false
    })

    products[prod_index].on_cart = false

    products.forEach(product => {
      if (product.on_cart) onCart.push(product)
    })

    if (products[prod_index].on_sale) totalPrice -= Number(products[prod_index].sale_price)
    else totalPrice -= Number(products[prod_index].price)

    this.setState({ products, onCart, totalPrice })
  }

  showCart = () => {
    const showCart = this.state.showCart
    this.setState({ showCart: !showCart })
  }

  filterHandler = (filters) => {
    this.setState({ filters })
  }

  orderHandler = (order) => {
    this.setState({ order })
  }

  render () {
    return (
      <div className="Shop">
        {this.state.notification &&
        <Notification>Produto adicionado no carrinho!</Notification>}

        {this.state.showCart && <Cart
          products={this.state.onCart}
          price={this.state.totalPrice}
          close={this.showCart}
          removeCart={this.removeCart}
        />}

        <header><Header count={this.state.onCart.length} click={this.showCart} /></header>
        <div>
          <span><h1>VESTIDOS</h1></span>
          <span><OrderBy update={this.orderHandler} /></span>
        </div>
        <nav><Filters update={this.filterHandler} /></nav>
        <main>
          <Products
            products={this.state.products}
            filters={this.state.filters}
            order={this.state.order}
            addCart={this.addCart}
            notify={this.notificationHandler}
          />
        </main>
        <footer>Profite - CNPJ 05.559.134/0001-60 End: Voluntário da Pátria, 301/702 Botafogo - RJ 22270-000</footer>
      </div>
    )
  }
}

export default Shop
