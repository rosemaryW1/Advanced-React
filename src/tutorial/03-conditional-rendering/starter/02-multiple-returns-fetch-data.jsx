import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    const fetchUser = async() =>{
      try{
        const response = await fetch(url)
        if  (!response.ok){
          setIsError(true)
          setIsLoading(false)
          return
        }
        const users = await response.json()
        setUsers(users)
      }catch(error){
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchUser()
  },[])
  if (isLoading){
    return <h2>Loading...</h2>
  }
  if (isError){
    return <h2>There was an error...</h2>
  } 
  const {avatar_url,name,company,bio} = users
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px'}} src= {users.avatar_url} alt={users.name}/>
      <h2>{users.name}</h2>
      <h4>Works at {users.company}</h4>
      <p>{users.bio}</p>
    </div>
  )
};
export default MultipleReturnsFetchData;
