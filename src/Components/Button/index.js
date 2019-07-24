import React, { Component } from 'react'
import './index.css'
class Button extends Component {
  render() {
    const { children, color } = this.props
    return (
      <button className={`btn ${color}`}>{children}</button>
    )
  }
}
 
export default Button