import React, {Component} from 'react';
import Person from "./Person/Person";
import PropTypes from 'prop-types';

class Persons extends Component {

  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
    console.log("[Persons.jsx] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.jsx] inside componentWillMount");
  }

  componentDidMount() {
    this.lastPersonRef.current.focus();
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
    // return nextProps.persons !== this.props.persons
    //   && nextProps.changed !== this.props.changed
    //   && nextProps.deleted !== this.props.deleted;
    return true;
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
          ref={this.lastPersonRef}
          changed={(event) => this.props.changed(event, person.id)}
          deleted={() => this.props.deleted(idx)}/>
      ) : null;
    });
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Persons;