import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormUsers from './components/FormUsers'
import axios from 'axios'
import UserCard from './components/UserCard'

function App() {
  const [users, setUsers] = useState()
  const BASEURL ='https://users-crud1.herokuapp.com'
  const getUsers = () =>{
    const URL = `${BASEURL}/users/`
    axios.get(URL)
    .then(res =>setUsers(res.data))
    .catch(e => console.log('error',e))
  }
   useEffect(() => {
     getUsers()
   }, [])
  const createNewUser = data=>{
    const URL = `${BASEURL}/users/`
    axios.post(URL,data)
    .then(res =>{
      console.log(res.data)
       getUsers() 
    })
    .catch(e => console.log(e))
   }

   const deleteUserById =(id) =>{
    const URL = `${BASEURL}/users/${id}/`
    axios.delete(URL,id)
    .then(res =>{
      console.log(res.data)
       getUsers() 
    })
    .catch(e => console.log(e))
      
   }

  
  return (
    <div className="App">
      <h1>Crud USERS</h1>
      <FormUsers createNewUser={createNewUser}/>
      {
        users?.map(user =>(
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
          />
        ))
      }
    </div>
  )
}

export default App
