import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardDesc from './card-desc'
import CardCaution from './card-caution'

class CardDetail extends Component {
  render() {
    return (
      <div>
        <div className='card-detail'>
          <CardDesc />
          <CardCaution />
        </div>
      </div>
    )
  }
}

export default CardDetail
