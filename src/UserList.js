import React from 'react'

const UserList = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
      
    </div>
  )
}

export default UserList
