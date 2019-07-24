import React, { Component } from 'react'

class Filter extends Component {


  render() { 
    return (
      <div>
        <div>
          <label>Espécie</label>
          <input type='text' placeholder='espécie' />
        </div>
        <div>
          <label>Cidade</label>
          <input type='text' placeholder='cidade' />
        </div>
        <div>
          <label>UF</label>
          <input type='text' placeholder='uf' />
        </div>
      </div>
    )
  }
}
 
export default Filter