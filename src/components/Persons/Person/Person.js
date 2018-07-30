import React from 'react';
import classes from "./Person.css"
// class Person extends Component {
//     name = "Max";
//     render() {
//         return <p>Im a Person!</p>
//     }
// }


const person = (props) => {
  return (
    <div className={classes.Person}>
      <p>Im a {props.name} and im {props.age} yrs old.</p>
      <p>{props.children}</p>
      <button onClick={props.deleted}>click me</button>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;