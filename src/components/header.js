import React from 'react'
import logo from '../images/dog-paw.svg'

const Header = () => (
  <header className="App-header">
    <h1 className="App-title"> Hello! Choose your Dog </h1>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
)

export default Header