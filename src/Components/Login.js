import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import UserCreation from "../Components/UserCreation";
import Axios from "axios";
//import {Link} from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const submit = async (e) => {
    e.preventDefault();

      const loginUser = { email, password };
      const loginRes = await Axios.post("/api/user/login-user", loginUser)
      .then(response => {
          if(response.data.success){
              alert('Successful')
          } else {
              alert('Failed')
          }
      })
  
  };
  return (
    <div className="page">
    
     <center>
     <h2>LOGIN</h2>
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <input type="submit" value="Log in" />
        <br></br>
        <br></br>
        <button><Link to="/UserCreation">Create User</Link></button>
      </form>
      </center>
    </div>
  );
}