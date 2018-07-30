import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person.js'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'

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
    let persons = null;
    const appClasses = [classes.red, classes.bold].join(" ");
    let btnClass = '';
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
      );
      throw new Error("aaaaa!")
      btnClass = classes.red;
    }
    return ( <ErrorBoundary>
      <div className={classes.App}>
        <h1 className={appClasses}>Hi!</h1>
        <button className={btnClass} onClick={this.togglePersons}>Switcher</button>
        {persons}
      </div>
      </ErrorBoundary>
    );
    //   return React.createElement("div", {classname: "App"}, React.createElement("h1", null, "Hi!!!"));
  }

}

export default App;
