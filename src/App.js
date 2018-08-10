import React, { Component } from 'react';
import Greeting from './components/Greeting'
import ExampleComponent from './components/Button';
// import ExampleComponent from './components/ExampleComponent';

class App extends Component {

	state = {
		people:[]
	}


	componentDidMount(){
		fetch("http://api.open-notify.org/astros.json")
			.then(resp => resp.json())
			.then(data => {
				this.setState({
					people: data.people
				})
			})
	}
	render(){
		console.log(this.state)
		return (
			<div>Hello, World!</div>
			// <Greeting />
			// <ExampleComponent />
			// <Button />
		)
	}
}

export default App;
