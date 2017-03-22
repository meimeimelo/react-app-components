import React, { Component, PropTypes } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardItem from './card-item'

class CardSection extends Component {
  static propTypes = {
    cardDataArray: PropTypes.array.isRequired
  }

  static defaultProps = {
    cardDataArray: []
  }

  render() {
    console.log(this.props.dataListArray)


    const { dataListArray } = this.props
    const cardItems = dataListArray.map( (value, index) =>
        <CardItem />
    )
    return (
      <div className='card-section'>
        { cardItems }
      </div>
    )
  }
}

export default CardSection
