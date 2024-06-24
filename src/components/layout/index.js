import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

export default Layout