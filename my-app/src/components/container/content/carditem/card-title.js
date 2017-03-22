import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'

class CardTitle extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='card-title'>
        { title }
      </div>
    )
  }
}

export default CardTitle
