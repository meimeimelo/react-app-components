import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'

class CardCaution extends Component {
  render() {
    return (
      <div className='card-caution'>
        <span className='caution-title'>caution: </span>
        <span className='caution-desc'>Lorem Ipsum is simply dummy text</span>
      </div>
    )
  }
}

export default CardCaution
