import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardTitle from './card-title'
import CardInfo from './card-info'
import CardFooter from './card-footer'

class CardItem extends Component {
  render() {
    return (
      <div>
        <div className='card-item'>
          <CardTitle />
          <CardInfo />
          <CardFooter />
        </div>
      </div>
    )
  }
}

export default CardItem
