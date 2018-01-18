import React, { Component } from 'react'
import './Filters.css'

class Filters extends Component {
  state = {
    colors: [
      { label: 'Vermelho', active: false },
      { label: 'Azul', active: false },
      { label: 'Branco', active: false },
      { label: 'Preto', active: false },
      { label: 'Laranja', active: false },
    ],

    sizes: [
      { label: 'p', active: false },
      { label: 'm', active: false },
      { label: 'g', active: false },
      { label: 'gg', active: false },
      { label: 'u', active: false },
      { label: '36', active: false },
      { label: '38', active: false },
      { label: '40', active: false },
      { label: '42', active: false },
      { label: '44', active: false },
      { label: '46', active: false }
    ],

    prices: [
      { label: 'de R$ 0 até R$ 50', active: false },
      { label: 'de R$ 51 até R$ 150', active: false },
      { label: 'de R$ 151 até R$ 300', active: false },
      { label: 'de R$ 301 até R$ 500', active: false },
      { label: 'a partir de R$ 501', active: false },
    ],

    filters: {
      colors: [],
      sizes: [],
      price: ''
    }
  }

  clearFilter = () => {
    const colors = [
      { label: 'Vermelho', active: false },
      { label: 'Azul', active: false },
      { label: 'Branco', active: false },
      { label: 'Preto', active: false },
      { label: 'Laranja', active: false },
    ]

    const sizes = [
      { label: 'p', active: false },
      { label: 'm', active: false },
      { label: 'g', active: false },
      { label: 'gg', active: false },
      { label: 'u', active: false },
      { label: '36', active: false },
      { label: '38', active: false },
      { label: '40', active: false },
      { label: '42', active: false },
      { label: '44', active: false },
      { label: '46', active: false }
    ]

    const prices = [
      { label: 'de R$ 0 até R$ 50', active: false },
      { label: 'de R$ 51 até R$ 150', active: false },
      { label: 'de R$ 151 até R$ 300', active: false },
      { label: 'de R$ 301 até R$ 500', active: false },
      { label: 'a partir de R$ 501', active: false },
    ]

    const filters = {
      colors: [],
      sizes: [],
      price: ''
    }

    this.props.update(filters)
    this.setState({ colors, sizes, prices, filters })
  }

  colorHandler = (index) => {
    const colors = [...this.state.colors]
    colors[index].active = !colors[index].active

    const filters = {...this.state.filters}
    const color_filter = []

    colors.forEach(color => {
      if (color.active) color_filter.push(color.label.toLowerCase())
    })

    filters.colors = color_filter

    this.props.update(filters)
    this.setState({ colors, filters })
  }

  sizeHandler = (index) => {
    const sizes = [...this.state.sizes]
    sizes[index].active = !sizes[index].active

    const filters = {...this.state.filters}
    const size_filter = []

    sizes.forEach(size => {
      if (size.active) size_filter.push(size.label.toLowerCase())
    })

    filters.sizes = size_filter

    this.props.update(filters)
    this.setState({ sizes, filters })
  }

  priceHandler = (index) => {
    const prices = [...this.state.prices]
    prices.forEach(price => price.active = false)
    prices[index].active = true

    const filters = {...this.state.filters}
    filters.price = prices[index].label.toLowerCase()

    this.props.update(filters)
    this.setState({ prices, filters })
  }

  render () {
    const colors = this.state.colors.map((color, index) => (
      <div key={color.label} className="checkbox" onClick={() => this.colorHandler(index)}>
        <span>{color.active && <span></span>}</span>
        <span>{color.label}</span>
      </div>
    ))

    const sizes = this.state.sizes.map((size, index) => (
      <span onClick={() => this.sizeHandler(index)} key={size.label} className={size.active ? 'active' : ''}>
        {size.label.toUpperCase()}
      </span>
    ))

    const prices = this.state.prices.map((price, index) => (
      <div key={price.label} className="checkbox" onClick={() => this.priceHandler(index)}>
        <span>{price.active && <span></span>}</span>
        <span>{price.label}</span>
      </div>
    ))

    return (
      <div className="Filters">
        <div>
          <h2>Cores</h2>
          {colors}
        </div>

        <div>
          <h2>Tamanhos</h2>
          <div className="sizes">
            {sizes}
          </div>
        </div>

        <div>
          <h2>Faixa de preço</h2>
          {prices}
        </div>

        <div onClick={this.clearFilter} className="clear">Limpar filtros</div>
      </div>
    )
  }
}

export default Filters
