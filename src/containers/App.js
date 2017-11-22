import React, { Component } from 'react'
import '../css/App.css'
import ReverseButton from '../components/reverseButton'
import Header from '../components/header'
import SearchInput from '../components/searchInput'
import MoreButton from '../components/moreButton'
import ListBreeds from './listBreeds'


class App extends Component {
  static filter(breeds, search) {
    const reg = new RegExp(`^${search}`)
    return breeds.filter(el => reg.test(el))
  }

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      breeds: [],
      imgUrl: '#',
      isToggleOn: true,
      search: '',
      currentBreedName: ''
    }
  }

  componentWillMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(({ message }) => this.setState({ breeds: message }))
      .catch(console.warn)
  }

  handleSearchInput = event => {
    const { value } = event.target
    this.setState({
      search: value
    })
  }

  handleReverse = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      breeds: this.state.breeds.reverse()
    })
  }

  handleListClick = breed => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(({ message }) =>
        this.setState({
          imageUrl: message,
          currentBreedName: breed
        })
      )
      .catch(e => this.setState({ error: true }))
  }

  handleBreedName = e => {
    const breed = this.state.currentBreedName
    if (!breed) {
      e.target.innerHTML = 'Choose First!'
    } else {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(({ message }) => this.setState({ imageUrl: message }))
    }
  }

  render() {
    const {
      breeds,
      imageUrl,
      isToggleOn,
      search,
      currentBreedName
    } = this.state
    let filteredBreeds = App.filter(breeds, search)
    return (
      <div className="App">
        <Header />
        <div className="Controls-wrap">
          <ReverseButton isToggleOn={isToggleOn} method={this.handleReverse} />
          <MoreButton name={currentBreedName} method={this.handleBreedName} />
          <SearchInput method={this.handleSearchInput} />
        </div>
        {this.state.error && <span>WE FUCKED UP!</span>}
        <div className="Entry-wrap">
          <ListBreeds dogs={filteredBreeds} method={this.handleListClick} />
          <div className="Dog-Image-wrap">
            <img className="Dog-Image" alt="dog" src={imageUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
