import React, {useEffect,useState} from 'react'
import { getUsers} from '../service/api.js';
import "./Dash.css";

import { Link } from 'react-router-dom';

const Read = () => {
    const [users, setUsers] = useState([]);
console.log(users)


    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    return (
        <>
         <div class="wrap">
        <h1>Employee Management</h1>
        <p>Open Book Assignment submitted by YOUR_NAME</p>
        <div class="forwrd">
        <Link to="/Create">
        <button>Create</button>
          </Link>
          <Link to="/Read">
            <button>Read</button>
          </Link>
          <Link to="/Update">
          <button>Update</button>
          </Link>
          <Link to="/Delete">
          <button>Delete</button>
          </Link>
        </div>
        <hr />
        <div class="backwrd">
          <h4>Read Existing Employee</h4>
          <hr style={{height: '3px', fontweight: '900', width: '65%', backgroundcolor: "black"}}/><br/>
          {users.map((user)=>{
            console.log(user)
      return (
        <>
          <div class="form1">
            <label>Employee ID</label>
            <input type="text" value={user._id} class="input" />
          </div>
          <button class="btn1">Read</button>
          <hr style={{height: '3px', fontweight: '900', width: '65%', backgroundcolor: "black"}}/><br/>

        <div class="form1">
            <label>First Name</label>
            <input type="text" value={user.name} disabled class="input" />
          </div>
          <div class="form1">
            <label>Sur Name</label>
            <input type="text" value={user.surname} disabled class="input" />
          </div>
          <div class="form1">
            <label>Email</label>
            <input type="email" value={user.email} disabled class="input" />
          </div>
          <div class="form1">
            <label>Date of Birth</label>
            <input type="text" value={new Date(user.date).toDateString()} disabled style={{width: "44%"}} class="input" />
          </div>
          <div class="form1">
            <label>Gender</label>
            <input type="radio" disabled class="gen" name="gender" />
            {user.gend}
          </div>
          </>
          )})}
        </div>
      </div> 
        </>
    )
}

export default Read
