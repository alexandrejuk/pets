import React, { Component } from 'react'
import Card from '../../Components/Card'
import './index.css'

class Home extends Component {

  renderPet = pet => (
    <Card key={pet.id} pet={pet} />
  )

  render() {
    const { pets } = this.props

    return (
      <div>
        <h2>Bem vindo ao PetCodes!</h2>
        <div className='wrapper-content'>
          {pets.map(this.renderPet)}
        </div>
      </div>
    )
  }
}
 
export default Home