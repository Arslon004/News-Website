import React, { Component } from 'react'

import arrow from "../../assets/images/arrow.svg"
import { NavLink } from 'react-router-dom'
export class Backtop extends Component {
  render() {
    return (
      <NavLink to="/" className='backTop'>
        <img src={arrow} alt="arrowImg" />
      </NavLink>
    )
  }
}

export default Backtop