// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          peopleInSpace: json.people
        })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
