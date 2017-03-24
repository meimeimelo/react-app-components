import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardThumb from './card-thumb'
import CardDetail from './card-info-detail'

class CardInfoContainer extends Component {
  render() {
    const { description } = this.props
    return (
      <div className="card-content">
        <CardThumb />
        <CardDetail description={this.props.description}/>
        <div className="clear"></div>
      </div>
    )
  }
}

export default CardInfoContainer
