import Axios from "axios";
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";


class UserCreation extends Component{
  constructor(props){
    super(props)

    this.state={
      email:'',
      username:'',
      password:'',
      passwordCheck:'',
      role:''
      
    }
   
  }
  
  changeEmailHandler = event =>{ this.setState({email:event.target.value})}
  changeUserName = event =>{ this.setState({username:event.target.value}) }
  changePasswordHandler = event =>{this.setState({password:event.target.value})}
  changePasswordcheck = event =>{ this.setState({passwordCheck:event.target.value}) }
  changeRoleHandler = event =>{ this.setState({role:event.target.value}) }

  onSubmit = async (e) => {
    e.preventDefault();

    const User = {
      email:this.state.email,
      username:this.state.username,
      password:this.state.password,
      passwordCheck:this.state.passwordCheck,
      role:this.state.role
    };
    axios.post("/api/user/register-user", User)
          .then(response => {
              if(response.data.success){
                  alert('Successful')
                  this.props.history.push('/login-user/');
  
              } else {
                  alert('Failed')
              }
          })
      }
  
render(){
  return (
    <div className="page">
      <h2>Register</h2>
      
      <form className="form" onSubmit={this.onSubmit} >
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          name = "email"
          value={this.state.email}
          onChange={this.changeEmailHandler}
        />
        <br></br> <br></br>
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          type="username"
          name = "username"
          value={this.state.username}
          onChange={this.changeUserName}
        />
        <br></br> <br></br>
        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          name = "password"
          value={this.state.password}
          onChange={this.changePasswordHandler}
        />
        <input
          type="password"
          name = "passwordCheck"
          placeholder="Verify password"
          value={this.state.passwordCheck}
          onChange={this.changePasswordcheck}
        />
         <br></br> <br></br>
        <label htmlFor="register-role">Role Name</label>
        <input
          name = "role"
          id="register-role"
          type="text"
          value={this.state.role}
          onChange={this.changeRoleHandler}
        />
        <Link to="/RoleCreation"><button>Create Role</button></Link>
        <Link to="/UserInquiry"><button> Any Inquiries</button></Link>
         <br></br> <br></br>
        <input type="submit" value="Register" onClick={this.onSubmit}/>
      </form>
    </div>
  );
}
}
export default UserCreation;

