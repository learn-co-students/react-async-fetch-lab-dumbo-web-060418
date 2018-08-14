// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    people: []
  }

  render() {
    return (
      <div>
      {this.state.people.map((person, id) => <h6 key={id}>{person.name}</h6>)}
      </div>
    )
  }


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json =>
      this.setState({
        people: json.people
      })
    )
  }

}
