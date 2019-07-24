import axios from 'axios'

const url = 'http://localhost:3000/pets'

class PetService {

  getPets() {
    return axios.get(url)
  }
}

export default PetService