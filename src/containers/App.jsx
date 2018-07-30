import React, {Component} from 'react';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";


class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Max", age: 1},
      {id: '2', name: "New", age: 2},
      {id: '3', name: "q123123", age: 3},
    ],
    showPersons: true,
  };

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
