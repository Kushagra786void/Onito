import './App.css';
import {AddUser} from './Mycomponent/AddUser';
import {Users} from './Mycomponent/Users';

import  React, {useState} from 'react';
import {useEffect} from 'react';
function App() {

  let initUser;
  if(localStorage.getItem("users")===null){
    initUser=[];}
  else
  {initUser=JSON.parse(localStorage.getItem("users"));}

  const onDelete =(user)=>{

    //Deleting this way in react doesnot work
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);

    setUsers(users.filter((e)=>{
      return e!==user;
    }));
    localStorage.setItem("users", JSON.stringify(users));
  }

  const addUser=(Name,DOB,Sex)=>{
    let SNo;
    if(users.length===0)
     {SNo=1;}
    else{ SNo =users[users.length-1].SNo+1;}
    const myUser={
      SNo: SNo,
      Name: Name,
      DOB: DOB,
      Sex:Sex,
    }
    setUsers([...users, myUser]);
  }

  const [users, setUsers] =useState(initUser);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])  //if somebody change todo call upper method.

  return (
    <>
      <AddUser addUser={addUser}/>
      <Users users={users} onDelete={onDelete}/>
    </>
  );
}

export default App;
