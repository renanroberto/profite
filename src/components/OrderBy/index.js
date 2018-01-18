import React, { Component } from 'react'
import './OrderBy.css'

class OrderBy extends Component {
  state = {
    options: ["Mais recentes", "Menor preço", "Maior preço"],
    filter: 'Mais recentes'
  }

  filterHandler = () => {
    this.setState({ filter: this.selectInput.value })
    this.props.update(this.selectInput.value)
  }

  render () {
    return (
      <select ref={(input) => { this.selectInput = input }} className="OrderBy" onChange={() => this.filterHandler()}>
        {this.state.options.map(option => <option key={option}>{option}</option>)}
      </select>
    )
  }
}

export default OrderBy
