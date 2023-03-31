import { TextField } from "@mui/material";
import axios from "axios";
import React, { Component } from 'react'
export default class UserNameValidate extends Component {
    constructor()
    {
        super();
        this.state={
            userName:"",
            input:""
        }
        this.handleInput = this.handleInput.bind(this);

    }


    handleInput = (e) => {
        this.state=({
            input:e.target.value
        });
        
        let url = "http://localhost:8099/validate-username?username="+this.state.input
        axios
        .get(url)
        .then((response) => console.log(response.data));
            };
        
            

    
  render() {
    return (
      <div>
         <TextField id="username" label="UserName" variant="outlined" onChange={this.handleInput} value={this.state.value}/>
      </div>
    )
  }
}


