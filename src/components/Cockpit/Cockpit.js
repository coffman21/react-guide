import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  let appClasses = [classes.Red].join(" ");
  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  console.log(props);

  let wow = <p style={ { display: "none" } }>wow!</p>;

  if (props.persons.length < 2) {
    wow = <p style={ {color: 'red'} }>WOW OMG</p>;
  }

  return (
    <Aux>
      <h1 className={appClasses}>Hi!</h1>
      {wow}
      <button className={btnClass}
              onClick={props.clicked}>Switcher
      </button>
    </Aux>
  );
};

export default cockpit;