import React, { Component } from 'react'
import '../../style.css'
import  AdditionalDetail from './card-additional-detail'
import CardContentContainer from './card-info-container'

class CardInfo extends Component {
  render() {
    return (
      <div>
        <div className='card-container'>
          <AdditionalDetail />
          <CardContentContainer />
        </div>
      </div>
    )
  }
}

export default CardInfo
