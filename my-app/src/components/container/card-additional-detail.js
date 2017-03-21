import React, { Component } from 'react'
import '../../style.css'

class AdditionalDetail extends Component{
  render() {
    return (
      <div>
        <div className='additional-detail'>
          <div className='author-section'>
            post by: meimeimelo
          </div>
          <div className='tag-list'>
            <span className='tag-title'>tags:</span>
            <span className='tag-item'>html</span>
            <span className='tag-item'>css</span>
          </div>
        </div>
      </div>
    )
  }
}

export default AdditionalDetail
