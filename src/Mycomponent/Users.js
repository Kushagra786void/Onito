// rafc
import React from 'react'
import {UserItem} from "./UserItem";
export const Users = (props) => {
  let myStyle={
    minHeight:"80vh",
    margin:"10px auto",
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-5">Employees List</h3>
      
      {/* array of user */}
      {props.users.length===0? "No Users to Display" :
      props.users.map((iterator)=>{
        return (
         <UserItem user={iterator} key={iterator.SNo} onDeleting={props.onDelete}/>
        )
      })}
    </div>
  )
}
