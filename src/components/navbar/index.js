import React, { Component } from 'react'
import './style.css'

export default class Navbar extends Component {
  render() {
    return (
        <header>
          <img src="https://i.imgur.com/KDIDiSE.png" alt="Logo"/>
          <div className="perfil-container">
            <span>
              Perfil
            </span>
              <i className="material-icons">account_circle</i>
          </div>
        </header>
    )
  }
}
