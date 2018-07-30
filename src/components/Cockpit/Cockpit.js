import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

  let appClasses = [classes.Red].join(" ");
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  console.log(props);

  let wow = <p style={ { display: "none" } }>wow!</p>;

  if (props.persons.length < 2) {
    wow = <p style={ {color: 'red'} }>WOW OMG</p>;
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className={appClasses}>Hi!</h1>
      {wow}
      <button className={btnClass}
              onClick={props.clicked}>Switcher
      </button>
    </div>
  );
};

export default cockpit;