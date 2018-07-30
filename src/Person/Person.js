import React, {Component} from 'react';

// class Person extends Component {
//     name = "Max";
//     render() {
//         return <p>Im a Person!</p>
//     }
// }

const person = (props) => {
  return (
    <div>
      <p>Im a {props.name} and {props.age} old.</p>
      <p>{props.children}</p>
      <p onClick={props.delete}>click me</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
};

export default person;