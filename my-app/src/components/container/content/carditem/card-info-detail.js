import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardDesc from './card-desc'
import CardCaution from './card-caution'

class CardDetail extends Component {
  render() {
    const { description } = this.props
    
    return (
      <div className='card-detail'>
        <CardDesc description={this.props.description}/>
        <CardCaution />
      </div>
    )
  }
}

export default CardDetail
