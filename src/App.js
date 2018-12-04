import React from 'react'
import './App.css'
import words from './words';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      all: words,
      selected: null
    }
    this.randomize = this.randomize.bind(this)
  }

  componentDidMount() {
    this.randomize()
  }

  randomize() {
    const length = words.length
    const index = Math.floor(Math.random() * length)
    this.setState({selected: this.state.all[index]})
  }

  remove(item) {
    const words = this.state.all.filter(prompt => prompt != item)
    this.setState({all:words})
    this.randomize()
  }

  render() {
    return (
      <div className="App">
        <div className="prompt">{this.state.selected}</div>
        <button className="button" onClick = {() => this.randomize()}>Next Word</button>
        <button className="button" onclick = {() => this.remove(this.state.selected)}>Remove This Card</button>
        <br/>
        <div>{`${this.state.all.length} flashcards remain`}</div>
      </div>
    )
  }
}
