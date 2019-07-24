import React, { Component } from 'react'
import HomeContainer from '../../Containers/Home'

import PetService from '../../services/pet'

class Home extends Component {
  petService = null 
  
  state = {
    pets: []
  }

  componentDidMount() {
    this.petService = new PetService()
    this.handlePets()
  }

  async handlePets() {
    try {
      const { data: pets } = await this.petService.getPets()
      this.setState({ pets })
    } catch (error) {
      console.log('errrr', error)
    }
  }
  
  
  render() {
    const { pets } = this.state
    return (
      <HomeContainer pets={pets} />
    )
  }
}
 
export default Home;