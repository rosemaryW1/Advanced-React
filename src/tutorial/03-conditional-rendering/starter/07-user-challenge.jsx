import {useState} from "react"

const UserChallenge = () => {
 
  const [user, setUser] =useState(null)
  const  login = () =>{
    //normally you connect to the database
    setUser({name: 'Roy Kipchumba'})
  }
  const logout = () =>{
    setUser(null)
  }
  return (<div>
    {user? (
    <div>
      <h4>Hello There User {user.name}</h4>
      <button className="btn" onClick={logout}>logout</button>
    </div>
    ) : (
    <div>
      <h4>Please Login</h4>
      <button className="btn" onClick={login}>login</button>
    </div>
    )}
  </div>)
};

export default UserChallenge;
