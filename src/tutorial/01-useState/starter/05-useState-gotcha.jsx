import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const increaseValue = () =>{
    
    setTimeout(() => {
      console.log('clicked the button')
      setValue((currentState) => {
        return currentState + 1
      })

    },1000) 
    // setValue(value+1)
    

  }

  return <>
  <div>
    <h2>Value: {value}</h2>
    <button type="button" className='btn' onClick={increaseValue}>increase</button> 
  </div>
 
 </>
};

export default UseStateGotcha;
