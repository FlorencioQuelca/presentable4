import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import axios from 'axios'
import UserCard from './components/UserCard'
import'./styles/userCard.css'

function App() {
//update: para pasar info desde usercard hasta formUser
const BASEURL ='https://users-crud1.herokuapp.com'
  const [updateInfo, setUpdateInfo] =useState()

//console.log(updateInfo)

const updateUserById = (id,data) =>{
  const URL = `${BASEURL}/users/${id}/`
  axios.patch(URL,data)
  .then(res =>{console.log(res.date)
  getUsers() 
  })
  .catch(e => console.log('error',e))
}

  const [users, setUsers] = useState()
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

    const [formIsClose, setFormIsClose] = useState(true)
   const handleOpenForm = () =>{
    setFormIsClose(false)
  }
  
  return (
    <div className="App">
      <div className="App__container-title">
      <h1 className='App__title'>Crud USERS</h1>
      <button onClick={handleOpenForm} className='App__btn'> New User </button>
      </div>
      <div className={`'form__container' ${'formIsClose' && 'dissable__form'}`} >
      <FormUsers 
         createNewUser={createNewUser}
         updateInfo={updateInfo}
         updateUserById={updateUserById}
         setUpdateInfo={setUpdateInfo}
         setFormIsClose={setFormIsClose}
      />
      </div>
      <div className='users__containers'>
      {
        users?.map(user =>(
      <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setFormIsClose={setFormIsClose}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
