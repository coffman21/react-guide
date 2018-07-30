import React from 'react';
import Person from "./Person/Person";

const persons = (props) =>
  props.persons.map((person, idx) => {
    console.log(props);
    return props.showPersons ? (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
        deleted={() => props.deleted(idx)}/>
    ) : null;
  });

export default persons;