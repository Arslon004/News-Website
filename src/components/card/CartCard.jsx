import React, { Component } from 'react'

export class CartCard extends Component {
  render() {
    let {id,userId,date}=this.props
    return (
      <div className="cart">
        <h2 className="cart__id">Id: {id}; UserId:{userId}</h2>
        <p className="cart__date">Date of manufacture:{date.split("T")[0]}</p>
      </div>
    )
  }
}

export default CartCard