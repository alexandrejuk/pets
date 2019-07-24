import React, { Component } from 'react'
import LoginContainer from '../../Containers/Login'

class Login extends Component {

  state = {
    logged: false,
  }


  render() { 
    return (<LoginContainer />)
  }
}
 
export default Login