import React, { Component, Fragment } from 'react'

import "./HomeCard.css"
import { Link } from 'react-router-dom';

export class ElectronicCard extends Component {
  render() {
    let {category, id, description, image, price, rating, title} = this.props;
    return (
      <Fragment>
        <section>
          <div className="container">
          <div  className="card-container">
            <div className="card">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>Price:{price}; Rating:{rating.rate}</p>
              <p className='desc'>{description}</p>

              <Link to={`/${id}`} className='btn'>{category} {id}</Link>
            </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ElectronicCard