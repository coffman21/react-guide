import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Max", age: 1},
      {id: '2', name: "New", age: 2},
      {id: '3', name: "q123123", age: 3},
    ],
    showPersons: false,
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
        { persons: persons }
      )
  };

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({persons: persons})
  };

  render() {

    const style = {
      backgroundColor: 'green',
      color: "white",
      border: '1px solid white',
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    let classes = ['red', 'bold'].join(" ");

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                change={(event) => this.changeHandler(event, person.id)}
                delete={() => this.deletePersonHandler(idx)}/>
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className={classes}>Hi!</h1>
        <button style = {style} onClick={this.togglePersons}>Switcher</button>
        {persons}
      </div>
    );
    //   return React.createElement("div", {classname: "App"}, React.createElement("h1", null, "Hi!!!"));
  }

}

export default App;
