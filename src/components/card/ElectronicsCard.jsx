import React, { Component } from 'react'

import "./Cards.css"
import { NavLink } from 'react-router-dom';

export class ElectronicsCard extends Component {
  render() {
    let { image, title, description, category, id, price, rating } = this.props;
    return (
      <div className="card">
      <img src={image} alt="image" className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className='card__desc'>{description}</p>
      <p className='card__price'>Price: <span>{price}$</span><br /> Rating: <span>{rating.rate}</span> Count: <span>{rating.count}</span></p>
      <NavLink to={`/product-page/${id}`} className='card__btn'>{category} Learn more...</NavLink>
    </div>
    )
  }
}

export default ElectronicsCard