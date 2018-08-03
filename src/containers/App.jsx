import React, {Component} from 'react';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.jsx] inside constructor", props);
    this.state = {
      persons: [
        {id: '1', name: "Max", age: 1},
        {id: '2', name: "New", age: 2},
        {id: '3', name: "q123123", age: 3},
      ],
      showPersons: true,
    };
  }

  componentWillMount() {
    console.log("[App.jsx] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.jsx] inside componentDidMount");
  }

  componentWillUnmount() {
    console.log("[App.jsx] inside componentWillUnmount");
  }

  togglePersons = () => {
    const show = this.state.showPersons;
    this.setState({showPersons: !show});
  };

  changeHandler = (event, idx) => {
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === idx
    });
    let persons = [...this.state.persons];
    persons[personIdx].name = event.target.value;
    this.setState(
      {persons: persons}
    )
  };

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({persons: persons})
  };

  render() {
    console.log("[App.js] inside render()");

    let persons = <Persons persons={this.state.persons}
                           showPersons={this.state.showPersons}
                           deleted={this.deletePersonHandler}
                           changed={this.changeHandler}/>;

    let cockpit = <Cockpit showPersons={this.state.showPersons}
                           persons={this.state.persons}
                           clicked={this.togglePersons}/>;

    return (
      <div className={classes.App}>
        {cockpit}
        {persons}
      </div>
    );
  }

}

export default App;
