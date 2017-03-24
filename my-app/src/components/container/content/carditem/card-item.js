import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardTitle from './card-title'
import CardInfo from './card-info'
import CardFooter from './card-footer'

class CardItem extends Component {
  render() {
    const { title, description } = this.props
    return (
      <div className='card-item'>
        <CardTitle title={ this.props.title } />
        <CardInfo description={ this.props.description } />
        <CardFooter />
      </div>
    )
  }
}

export default CardItem
