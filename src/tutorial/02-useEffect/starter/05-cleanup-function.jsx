import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className="btn" onClick={()=> setToggle(!toggle)}>toggle component</button>
      {toggle && <RandomComponent />}
    </div>
  )
};

const RandomComponent = () => {
  useEffect(()=>{
    const someFunc = () =>{
      //some Logic
    }
    window.addEventListener('scroll',someFunc)
    return () => window.removeEventListener('scroll',someFunc)
  },[])
  return <h1>hello there</h1>
}

export default CleanupFunction;
