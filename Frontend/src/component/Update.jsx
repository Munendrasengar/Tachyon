import React, { useEffect, useState } from "react";
import { getUsers } from "../service/api.js";
import "./Dash.css";
import { Link } from "react-router-dom";


const Update = () => {
  
const initialValue = {
  name: '',
  surname: '',
  email: '',
  date: '',
  gend:''
}


const [user, setUser] = useState(initialValue);
const { name, surname, email, date, gend } = user;

const [isEdit, setIsEdit] = useState(null)

  const [users, setUsers] = useState([]);
  console.log(users);

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
}

const editor = () =>{
  setUsers(
    users.map((elem)=>{
      if (elem.id === isEdit){
        return {...elem , ...user}
      } return elem;
    })
  );
  setUser({ name: '',
  surname: '',
  email: '',
  date: '',
  gend:''});
  setIsEdit(null)
}

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

const editdata = (id)=>{
  const edit = users.find((editelem)=> editelem.id === id)
  setUser(edit)
  setIsEdit(id)
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
          <h4>Update Existing Employee</h4>
          <hr
            style={{
              height: "3px",
              fontweight: "900",
              width: "65%",
              backgroundcolor: "black",
            }}
          />
          <br />
              <>
                <div class="form1">
                  <label>Employee ID</label>
                  <input type="text"  class="input" />
                </div>
                {
                  users.map((ce)=>{
                    return(
                     
                <button onClick={()=> editdata(ce.id)} class="btn1">Read</button> 
                    )
                  })
                }
                <hr
                  style={{
                    height: "3px",
                    fontweight: "900",
                    width: "65%",
                    backgroundcolor: "black",
                  }}
                />
                <br /> <div class="form1">
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
               
              <button onClick={editor} class="btn" >
            Update
          </button>
          </>

        </div>
      </div>
    </>
  );
};

export default Update;
