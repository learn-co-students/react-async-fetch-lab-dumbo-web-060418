import React, { Component } from 'react'

export default class App extends Component {

  state = {
    astros: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({ astros: data.people }))
  }

  renderAstros() {
    return this.state.astros.map(astro => {
      return <li key={astro.name}>{astro.name}</li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderAstros()}
      </ul>
    )
  }
}
