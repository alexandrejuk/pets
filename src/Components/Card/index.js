import React, { Component } from 'react'
import './index.css'

class Card extends Component {

  render() {
    const { pet } = this.props
    return (
      <div className='card'>
        <div className='card-header'>
          <img className='image-pet' src={pet.image} alt='image pet' />
        </div>
        <div className='card-body'>
          <div className='content-pet-info'>
            <h3>{pet.name}</h3>
            <h3>{pet.specie}</h3>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Card