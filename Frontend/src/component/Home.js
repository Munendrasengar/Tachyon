import React from "react";
import { Link } from 'react-router-dom';
import "./Dash.css";


const Home = () => {
 
  return (
    <>
      <div className="wrap">
        <h1>Employee Management</h1>
        <p>Open Book Assignment submitted by YOUR_NAME</p>
        <div className="forwrd">
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
        </div>
    </>
  );
};

export default Home;
