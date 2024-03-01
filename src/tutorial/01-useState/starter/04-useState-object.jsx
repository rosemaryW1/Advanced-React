import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books'
  })
  const displayPerson = () =>{
    setPerson({name:'john',age: 28, hobby:'scream at the computer'})
    // setPerson({name: 'susan'}) instead of doing this, do this instead use the spread operator to copy all the values from the object and modify one value
    setPerson({...person, name:'susan'})
  }

  return <>

  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>Enjoys : {person.hobby}</h3>
  <button className="btn" onClick={displayPerson}>show John</button>
  </>
};

export default UseStateObject;

