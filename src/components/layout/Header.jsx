import React, { Component } from 'react'

import {  NavLink } from 'react-router-dom';

import  "./Header.css"

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container nav-container">
          <ul className='nav'>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/">Home</NavLink>
            </li>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/electronics">Electronics</NavLink>
            </li>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/mens">Men's clothing</NavLink>
            </li>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/womens">Women's clothing</NavLink>
            </li>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/jewelery">Jewelery</NavLink>
            </li>
            <li className='nav-item' >
              <NavLink className='nav-link' to="/cartPage">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header