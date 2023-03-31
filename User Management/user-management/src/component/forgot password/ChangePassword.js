import { TextField } from '@mui/material';
import React, { Component } from 'react'
import axios from "axios";

export default class ChangePassword extends Component {

    constructor()
    {
        super();
        this.state={
            password:"",
            confirmPassword:""
        }
        this.handlePassword = this.handlePassword.bind(this);
    }
    handlePassword = (e) =>
    { 
        this.setState({
            password: e.target.value,
          });
          console.log("password is=>"+this.state.password)
    }
  
    checkPassword = () =>
    {
        this.setState=({
            password:this.state.password,
            confirmPassword: this.state.confirmPassword

        })
        if(this.state.password === this.state.confirmPassword)
        {
            let url = "http://localhost:8099/change-password?username="+ "" +"&password="+this.state.password
            axios
            .post(url)
            .then((response) => console.log(response.data));
        }
    }
  render() {
    return (
        <div>
        <TextField id="password" label="password" variant="outlined" onChange={this.handlePassword}  value={this.state.password}/> 
        <TextField id="confirmPassword" label="confirmPassword" variant="outlined"  value={this.state.value}/>
    
     </div>
    )
  }
}
