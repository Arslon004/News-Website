import React, { Component, Fragment } from 'react'

export class WomensCategory extends Component {
  render() {
    let categoryId= window.location.pathname.split("/").at(-1);
    return (
      <Fragment>
        <section>
          <div className="container">WomensCategory {categoryId}</div>
        </section>
      </Fragment>
    )
  }
}

export default WomensCategory