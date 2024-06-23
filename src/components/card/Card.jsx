import React, { Component, Fragment } from 'react'

export class Card extends Component {
  render() {
    let {id,userId,date}=this.props
    return (
      <Fragment>
        <section>
          <div className="container">
            <h2>Id-{id}, UserId-{userId}</h2>
            <h3>{date.split("T")[0]}</h3>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Card