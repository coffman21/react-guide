import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'
import CharComponent from './Person/CharComponent.js'
import ValidationComponent from './Person/ValidationComponent.js'

class App extends Component {

//   state = {
//     persons: [
//       {id: '1', name: "Max", age: 1},
//       {id: '2', name: "New", age: 2},
//       {id: '3', name: "q123123", age: 3},
//     ],
//     showPersons: false,
//   };
//
//   togglePersons = () => {
//     const show = this.state.showPersons;
//     this.setState({showPersons: !show});
//   };
//
//   changeHandler = (event, idx) => {
//     const personIdx = this.state.persons.findIndex(p => {
//       return p.id === idx
//     });
//     let persons = [...this.state.persons];
//     persons[personIdx].name = event.target.value;
//     this.setState(
//         { persons: persons }
//       )
//   };
//
//   deletePersonHandler = (idx) => {
//     const persons = [...this.state.persons];
//     persons.splice(idx, 1);
//     this.setState({persons: persons})
//   };
//
//   render() {
//     let persons = null;
//
//     if (this.state.showPersons) {
//       persons = (
//         <div>
//           {this.state.persons.map((person, idx) => {
//             return (
//               <Person
//                 key={person.id}
//                 name={person.name}
//                 age={person.age}
//                 change={(event) => this.changeHandler(event, person.id)}
//                 delete={() => this.deletePersonHandler(idx)}/>
//             )
//           })}
//         </div>
//       );
//     }
//     return (
//       <div className="App">
//         <h1>Hi!</h1>
//         <button onClick={this.togglePersons}>Switcher</button>
//         {persons}
//       </div>
//     );
//     //   return React.createElement("div", {classname: "App"}, React.createElement("h1", null, "Hi!!!"));
//   }

  state = {
    validation: "",
    chars: [],
  };

  write = (event, chars) => {
    const charsNow = event.target.value;
    const len = chars.length;
    this.setState({
      chars: [...charsNow],
      validation: len < 4 ? "too short" : len > 10 ? "too long" : "all fine",
    });
  };

  render() {
    const chars = this.state.chars;
    const charComps = (
      <div> {
          chars.map((c, idx) => {
            return (<CharComponent key={idx} char={c}/>)
        })} </div>
    );

    return (
      <div>
        <input type='text'
               value={this.state.value}
               onChange={(event) => this.write(event, this.state.chars)}/>
        <ValidationComponent
          status={this.state.validation}/>
        {charComps}
      </div>
    )
  }
}

export default App;
