import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import  AdditionalDetail from './card-additional-detail'
import CardContentContainer from './card-info-container'

class CardInfo extends Component {
  render() {
    const { cardinfo } = this.props
    return (
      <div className='card-container'>
        <AdditionalDetail />
        <CardContentContainer description={this.props.cardinfo} />
      </div>
    )
  }
}

export default CardInfo
