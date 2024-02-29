import{useEffect, useState} from 'react';
import UserList from "./UserList";
import './App.css';
import axios from 'axios';

function App() {
  const [users,setUsers]= useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>
    setUsers(result.data))
  })
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map((user)=>(
            <UserList user={user}/>
        
          ))
        }
      </header>
    </div>
  );
}

export default App;
