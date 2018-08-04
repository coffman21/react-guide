import React, {Component} from 'react';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";
import withClassConf from '../hoc/WithClassConf';
import Aux from '../hoc/Aux';

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
      toggleClickHandler: 0,
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[App.jsx] inside shouldComponentUpdate", nextProps, nextState);
  //   return nextProps.persons !== this.props.persons
  //     && nextProps.showPersons !== this.props.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[App.jsx] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[App.jsx] inside componentDidUpdate");
  }


  togglePersons = () => {
    const show = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !show,
        toggleClickHandler: this.state.toggleClickHandler + 1
      }
    });
  }

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
    this.setState({persons: [...this.state.persons].splice(idx, 1)})
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
      <Aux>
        <button onClick={() => {
          this.setState({showPersons: true})
        }}>Show Persons
        </button>
        <p>{this.state.toggleClickHandler}</p>
        {cockpit}
        {persons}
      </Aux>
    );
  }

}

export default withClassConf(App, classes.App);
