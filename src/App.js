// create your App component here
import React from 'react'


class App extends React.Component {


  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(console.log)
  }
  //   .then(astros => this.mapAstros(astros))
  // }
  //
  // mapAstros(astros) {
  //   console.log(astros)
  //   const mappedAstros = astros.people.map(astro => {
  //     return <div>{astro.name}</div>
  //   })
  // }

  render(){
  return(
    <div></div>
  )}
}

export default App
