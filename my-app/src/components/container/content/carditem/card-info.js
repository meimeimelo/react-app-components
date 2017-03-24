import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import  AdditionalDetail from './card-additional-detail'
import CardContentContainer from './card-info-container'

class CardInfo extends Component {
  render() {
    const { description } = this.props
    return (
      <div className='card-container'>
        <AdditionalDetail />
        <CardContentContainer description={this.props.description} />
      </div>
    )
  }
}

export default CardInfo
