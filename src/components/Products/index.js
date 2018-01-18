import React, { Component } from 'react'
import './Products.css'

import Aux from 'HOC/Aux'
import Product from './Product'

class Products extends Component {
  state = {
    limit: 9
  }

  increaseLimit = () => {
    this.setState(prevState => ({ limit: prevState.limit + 3 }))
  }

  render () {
    let products = []

    let products_obj = [...this.props.products]

    switch (this.props.order) {
      case 'Maior preço':
        products_obj.sort((a, b) => {
          let price_a = (a.on_sale ? a.sale_price : a.price)
          let price_b = (b.on_sale ? b.sale_price : b.price)

          return Number(price_b) - Number(price_a)
        })
        break
      case 'Menor preço':
        products_obj.sort((a, b) => {
          let price_a = (a.on_sale ? a.sale_price : a.price)
          let price_b = (b.on_sale ? b.sale_price : b.price)

          return Number(price_a) - Number(price_b)
        })
        break
      default:
        products_obj = [...this.props.products]
        break
    }

    products_obj.forEach((product, index) => {
      const colorFilter = (this.props.filters.colors.length === 0 ||
      this.props.filters.colors.includes(product.color))

      let sizeFilter = false

      if (this.props.filters.sizes.length === 0){
        sizeFilter = true
      } else {
        product.size.forEach(s => {
          if (this.props.filters.sizes.includes(s)) sizeFilter = true
        })
      }

      let priceFilter = false
      let price = (product.on_sale ? product.sale_price : product.price)

      switch (this.props.filters.price) {
        case '':
          priceFilter = true
          break
        case 'de r$ 0 até r$ 50':
          if (price <= 50) priceFilter = true
          break
        case 'de r$ 51 até r$ 150':
          if (price > 50 && price <= 150) priceFilter = true
          break
        case 'de r$ 151 até r$ 300':
          if (price > 150 && price <= 300) priceFilter = true
          break
        case 'de r$ 301 até r$ 500':
          if (price > 300 && price <= 500) priceFilter = true
          break
        case 'a partir de r$ 501':
          if (price > 500) priceFilter = true
          break
        default:
          break
      }

      if (colorFilter && sizeFilter && priceFilter && products.length < this.state.limit) {
        products.push(
          <div key={product.id}>
            <Product {...product} click={() => {this.props.addCart(index); this.props.notify()}} />
          </div>
        )
      }
    })

    return (
      <Aux>
        <div className="Products">
          {products}
        </div>
        <button className="showMore" onClick={this.increaseLimit}>Mostrar mais</button>
      </Aux>
    )
  }
}

export default Products
