import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header className='bg-secondary '>
        <nav className="container nav-container">
          <ul className="nav d-flex justify-content-between list ">
            <li className="nav-item list-item">
              <NavLink className="nav-link list-link " to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link list-link" to="/jewelery">Jewelery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link list-link" to="/electronics">Electronics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list-link" to="/menClothing">Men's clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list-link" to="/womenClothing">Women's clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link list-link" to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header