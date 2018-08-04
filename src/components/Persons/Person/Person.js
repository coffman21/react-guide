import React, {Component} from 'react';
import classes from "./Person.css"

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();

    console.log("[Person.jsx] inside constructor", props);
  }

  focus() {
    this.inputElement.current.focus();
  }

  componentWillMount() {
    console.log("[Person.jsx] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.jsx] inside componentDidMount");

  }

  componentWillUnmount() {
    console.log("[Person.jsx] inside componentWillUnmount");
  }

  render() {
    console.log("[Person.js] inside render()");

    return <div className={classes.Person}>
      <p>Im a {this.props.name} and im {this.props.age} yrs old.</p>
      <p>{this.props.children}</p>
      <button onClick={this.props.deleted}>click me</button>
      <input ref={ this.inputElement }
             type="text"
             onChange={this.props.changed}
             value={this.props.name}/>
    </div>
  }
}
export default Person;