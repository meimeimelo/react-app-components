import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardItem from './card-item'

class CardSection extends Component {
  render() {
    return (
      <div className='card-section'>
        <CardItem />
        <CardItem />
      </div>
    )
  }
}

export default CardSection
