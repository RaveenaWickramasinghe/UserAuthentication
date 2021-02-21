import React from 'react';
import Axios from "axios";
import {Link} from 'react-router-dom';


class RoleCreation extends React.Component{

    
    constructor(props){
        super(props)
    
        this.state={
          username:'',
          role:''
        }
       
      }
      
      changeUsername = event =>{ this.setState({username:event.target.value})}
      changeRoleHandler = event =>{ this.setState({role:event.target.value}) }
    
    
      onSubmit = (event) => {
        event.preventDefault();
     
        const role = {
          
            username:this.state.username,
            role: this.state.role 
        }
     if(this.state.role == "Admin") {
        Axios.post("/api/user/admin-protected", role)
        .then(response => {
            if(response.data.success){
                alert('successful')
                this.props.history.push('/roleInquiry/');
    
            } else {
                alert('Failed')
            }
        })
    }else if(this.state.role =="User"){
        Axios.post("/api/user/user-protected", role)
        .then(response => {
            if(response.data.success){
                alert('successful')
                this.props.history.push('/RoleInquiry/');
    
            } else {
                alert('Failed')
            }
        })
    }else{
        Axios.post("/api/user/employee-protected", role)
        .then(response => {
            if(response.data.success){
                alert('successful')
                this.props.history.push('/RoleInquiry/');
    
            } else {
                alert('Failed')
            }
        })
    }
     

}  
    

    render(){
        return(
            <div>
                <h2>Creating Roles</h2>
                <form>
                    <label>Username: </label>
                    <input type="text" onChange={this.changeUsername} value={this.state.username} className="form-control"
                    name="username" placeholder="Enter Username"/>

                    <br></br><br></br>

                    <label>Role Name: </label>
                    <select   onChange={this.changeRoleHandler} value={this.state.role}  className="form-control" 
                    name="role" placeholder="Roles" >
                    <option>User</option>
                    <option>Admin</option> 
                    <option>Employee</option>
            </select>
            <br></br><br></br>

          <Link to="/">  <input type="submit" value="Create Role" onClick={this.onSubmit}/></Link>
          <Link to="/RoleInquiry"><button> Any Inquiries</button></Link>
                </form>
            </div>

        );
    }
}

export default RoleCreation;