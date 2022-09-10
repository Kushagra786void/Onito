// rafc
import React from 'react'

export const UserItem = ({user, onDeleting}) => {
  return (
    <>
    <div>
        <h4>{user.Name}</h4>
        {/* <p>{user.DOB}</p> */}
        <button className="btn btn-sm btn-danger" onClick={()=>onDeleting(user)}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
