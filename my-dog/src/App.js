import React, { Component } from 'react'
import logo from './dog-paw.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: []
    }
    this.btnSort = this.btnSort.bind(this)
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(({ message }) =>
        this.setState({
          breeds: message
        })
      )
  }

  render() {
    const dogEntry = this.state.breeds
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello! Choose your Dog</h1>
        </header>
        <button className="SortBtn" onClick={this.btnSort}>
          Sort of z-a
        </button>
        <div className="Dogs">
          {dogEntry.map((breed, i) => (
            <li className="dogEntry" key={i}>
              {breed}
            </li>
          ))}
        </div>
      </div>
    )
  }

  btnSort(event) {
    
    console.log('click')
    
  }
}

export default App
