import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'

class CardDesc extends Component {
  render() {
    const { description } = this.props
    return (
      <div className="card-desc">
        { description }
      </div>
    )
  }
}

export default CardDesc
