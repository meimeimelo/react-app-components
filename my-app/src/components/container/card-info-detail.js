import React, { Component } from 'react'
import '../../style.css'

class CardDetail extends Component {
  render() {
    return (
      <div>
        <div className='card-detail'>
          <div className='card-desc'>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className='card-caution'>
            <span className='caution-title'>caution: </span>
            <span className='caution-desc'>Lorem Ipsum is simply dummy text</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CardDetail
