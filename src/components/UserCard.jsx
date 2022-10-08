import React from 'react'

const UserCard = ({user,deleteUserById,setUpdateInfo, setFormIsClose}) => {

  const handleEdit =() =>{
    setUpdateInfo(user)
    setFormIsClose(false)
  }
  return ( 
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user__list'>
                <li className='user__item'><span className='user__span'>Email : </span>{user.email}</li>
                <li className='user__item'><span className='user__span'>Birthday : </span>{user.birthday}</li>
            </ul>
            <footer className='user__footer'>
               <button className='user__btn' onClick={handleEdit} >Edit</button>
               <button className='user__btn' onClick={()=> deleteUserById(user.id)}>Delete</button>
            </footer>
    </article>
  )
}

export default UserCard