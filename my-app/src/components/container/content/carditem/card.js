import React, { Component, PropTypes } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardItem from './card-item'
import ButtonSection from './fetchButton/button-section'

class CardSection extends Component {
  static propTypes = {
    cardDataArray: PropTypes.array.isRequired
  }

  static defaultProps = {
    cardDataArray: []
  }

  render() {
    const { dataListArray, loadData, clearData } = this.props
    const cardItems = dataListArray.map( (value, index) =>
        <CardItem key={value.id} title={value.title} description={value.body}/>
    )

    return (
      <div className='card-section'>
        <ButtonSection loadData={loadData} clearData={clearData}/>
        { cardItems }
      </div>
    )
  }
}

export default CardSection
