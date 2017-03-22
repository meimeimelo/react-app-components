import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'

class CardTags extends Component {
  render() {
    return (
      <div className='table-cell'>
        <div className='tag-list'>
          <span className='tag-title'>tags:</span>
          <span className='tag-item'>html</span>
          <span className='tag-item'>css</span>
        </div>
      </div>
    )
  }
}

export default CardTags
