import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardThumb from './card-thumb'
import CardDetail from './card-info-detail'

class CardInfoContainer extends Component {
  render() {
    return (
      <div>
        <div className='card-content'>
          <CardThumb />
          <CardDetail />
          <div className='clear'></div>
        </div>
      </div>
    )
  }
}

export default CardInfoContainer
