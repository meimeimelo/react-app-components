import React, { Component } from 'react'
import '../../../../mainstyle.css'
import '../../containerstyle.css'
import CardAuthor from './card-author'
import CardTags from './card-tag'

class AdditionalDetail extends Component{
  render() {
    return (
      <div className="additional-detail table">
        <CardAuthor />
        <CardTags />
      </div>
    )
  }
}

export default AdditionalDetail
