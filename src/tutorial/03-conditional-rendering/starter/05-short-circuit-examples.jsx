import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
  <div>
    <h2>{text || 'default Value'}</h2>;
    {text && (
    <div>
      <h2>Whatever Return</h2>
      <h2>{name}</h2>
    </div>)}
    {/* {!text && (
    <div>
      <h2>Whatever Return</h2>
      <h2>{name}</h2>
    </div>)} */}
    {user && <SomeComponent name={user.name}/>}
    <h2>Ternary Operator</h2>
    <button className = 'btn'>{isEditing ? 'edit':'add '}</button>
    {user ? <div>
     <h4>Hello There user {user.name}</h4>
    </div>: <div>
     <h2>You need to Log in</h2>
    </div> }
  </div>
    
)};

const SomeComponent = ({name}) =>{
  return (
    <div>
      <h2>Whatever Return</h2>
      <h2>{name}</h2>
    </div>)
}

export default ShortCircuitExamples;
