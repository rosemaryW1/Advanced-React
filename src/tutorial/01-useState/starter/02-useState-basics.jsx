import { useState } from "react"

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState('hello')[0];
  // console.log(value)

  // here setCount is the function that controls the use state and also we are setting our default value to one, also we are destructuring an array

  const [count,setCount] = useState(0)
  const handleClick = () =>{
    setCount(count + 1)
  }
  return <div>
    <h4>You clicked {count} times</h4> 
    <button type="button" className='btn' onClick={handleClick}>click me</button>
  </div>


  return <h2>useState basics</h2>;
};

export default UseStateBasics;