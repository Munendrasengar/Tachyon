import React,{useState} from "react";
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';
import "./Dash.css";

import { Link } from 'react-router-dom';


const initialValue = {
  name: '',
  surname: '',
  email: '',
  date: '',
  gend:''
}

const Create = () => {
  const [user, setUser] = useState(initialValue);
  const { name, surname, email, date, gend } = user;
  // let history = useHistory();

  const onValueChange = (e) => {
      console.log(e.target.value);
      setUser({...user, [e.target.name]: e.target.value})
  }

  const addUserDetails = async() => {
      await addUser(user);
      setUser({ name: '',
      surname: '',
      email: '',
      date: '',
      gend:''});
      // history.push('./all');
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
        <hr/>
        <div class="backwrd">
          <h4>Create New Employee</h4>
          <hr style={{height: '3px', fontweight: '900', width: '65%', backgroundcolor: "black"}}/><br/>
          <div class="form1">
            <label>First Name</label>
            <input type="text" name='name' onChange={(e) => onValueChange(e)} value={name} class="input" />
          </div>
          <div class="form1">
            <label>Sur Name</label>
            <input type="text"  name='surname' onChange={(e) => onValueChange(e)} value={surname} class="input" />
          </div>
          <div class="form1">
            <label>Email</label>
            <input type="email" name='email' onChange={(e) => onValueChange(e)} value={email} class="input" />
          </div>
          <div class="form1">
            <label>Date of Birth</label>
            <input type="date"  name='date' onChange={(e) => onValueChange(e)} value={date} style={{width: "44%"}} class="input" />
          </div>
          <div class="form1">
            <label>Gender</label>
            <input type="radio" onChange={(e) => onValueChange(e)} value="Male" class="gen" name="gend" checked={gend==="Male"}/>
            Male
            <input type="radio" onChange={(e) => onValueChange(e)} value="Female" class="gen" name="gend" checked={gend==="Female"} />
            Female
          </div>
          <button class="btn" onClick={() => addUserDetails()}>Create</button>
        </div>
      </div>
    </>
  );
};

export default Create;
