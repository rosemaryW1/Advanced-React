import { useState,useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users,setUsers] = useState([])

  useEffect(() => {
    try{
      const fetchData = async() =>{
      const response = await fetch(url)
      const users = await response.json()
      console.log(users)
    }
  }
    catch (error){
        console.log(error)
    }

    
    
    fetchData()
  },[])


  return <h2>fetch data example</h2>;
};
export default FetchData;
