import React from 'react'

const UserCard = ({user,deleteUserById}) => {
  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <ul>
                <li><span>Email : </span>{user.email}</li>
                <li><span>Birthday : </span>{user.birthday}</li>
            </ul>
            <footer>
               <button>edgoit</button>
               <button onClick={()=> deleteUserById(user.id)}>delete</button>
            </footer>
    </article>
  )
}

export default UserCard