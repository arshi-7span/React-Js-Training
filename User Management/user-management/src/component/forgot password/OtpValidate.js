import React, { Component } from 'react'
import axios from "axios";
import { TextField } from "@mui/material";
export default class OtpValidate extends Component {
    constructor()
    {
        super();
        this.state={
            input:""
        }
        this.handleOtp = this.handleOtp.bind(this);
    }

    handleOtp = (e) => {
        this.state=({
            input:e.target.value
        });
        let url = "http://localhost:8099/otp?username="+this.state.username+"&otp="+this.state.input
       
        axios
        .get(url)
        .then((response) => console.log(response.data));
        
            };

    render() {
    return (
        <div>
        <TextField id="otp" label="otp" variant="outlined" onChange={this.handleOtp} value={this.state.value}/>
     </div>
    )
  }
}
