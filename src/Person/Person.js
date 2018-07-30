import React, {Component} from 'react';

// class Person extends Component {
//     name = "Max";
//     render() {
//         return <p>Im a Person!</p>
//     }
// }


const person = (props) => {
  return (
    <div className="Person">
      <p>Im a {props.name} and {props.age} old.</p>
      <p>{props.children}</p>
      <button onClick={props.delete}>click me</button>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
};

export default person;