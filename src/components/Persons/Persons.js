import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log("[Persons.jsx] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.jsx] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.jsx] inside componentDidMount");
  }

  componentWillUnmount() {
    console.log("[Persons.jsx] inside componentWillUnmount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Persons.jsx] inside componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.jsx] inside shouldComponentUpdate", nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.jsx] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Persons.jsx] inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] inside render()");

    return this.props.persons.map((person, idx) => {
      console.log(this.props);
      return this.props.showPersons ? (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
          deleted={() => this.props.deleted(idx)}/>
      ) : null;
    });
  }
};


export default Persons;