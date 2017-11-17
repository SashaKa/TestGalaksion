import React, { Component } from 'react'
import logo from './dog-paw.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breeds: [],
      filteredBreed: [],
      imgUrl: '#'
    }
    this.btnSort = {
      isToggleOn: true
    }
    this.filterInput = {
      search: ''
    }
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    this.state.filteredBreed.reverse()
  }

  handleInput = event => {
    const value = event.target.value
    const pattern = new RegExp(`^${value}`)
    const filteredBreed = this.state.breeds.filter(el => pattern.test(el))
    this.setState({
      filteredBreed
    })
  }

  handleListClick = index => {
    const breedName = this.state.filteredBreed[index]
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then(response => response.json())
      .then(({ message }) => {
        this.setState({ imageUrl: message })
        console.log(message)
      })
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(({ message }) =>
        this.setState({
          breeds: message,
          filteredBreed: message
        })
      )
  }

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello! Choose your Dog</h1>
        </header>
        <div className="Controls-wrap">
          <button onClick={this.handleButtonClick} className="Sort-Btn">
            {this.state.isToggleOn ? 'Sort of A-Z' : 'Sort of Z-A'}
          </button>
          <input className="Search-Input" type="text" onInput={this.handleInput} />
        </div>
        <div className="Entry-wrap">
          <div className="Dogs-List">
            {this.state.filteredBreed.map((breed, i) => (
              <li
                onClick={() => this.handleListClick(i)}
                className="dogEntry"
                key={i}
              >
                {breed}
              </li>
            ))}
          </div>
          <div className="Dog-Image-wrap">
            <img className="Dog-Image" alt="dog" src={this.state.imageUrl} />
          </div>
        </div>
      </div>
  }
}

export default App
