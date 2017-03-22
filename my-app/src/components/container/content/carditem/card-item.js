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
      <div>
        <div className='card-item'>
          <CardTitle title={this.props.title} />
          <CardInfo cardinfo={this.props.description} />
          <CardFooter />
        </div>
      </div>
    )
  }
}

export default CardItem
