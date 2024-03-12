import "./ComponentsStyles.css" ;

import React from "react" ;

import logo from "../icons/live-chat-icon.png" ;

import { Button, TextField } from "@mui/material" ;


function Login() {
    return (
        <div className = "login-container">
            <div className = "login-image-container">
                <img className = "welcome-logo" src = { logo } alt = "Live Chat Icon" />
            </div>
            
            <div className = "login-box">
                <p className = "login-text">Login to your Account</p>
                <TextField id = "standard-basic" label = "UserName" variant = "outlined" />
                <TextField id = "outlined-password-input" label = "Password" type = "password" autoComplete = "current-password" />
                <Button variant = "outlined">Login</Button>
            </div>            
        </div>
    ) ;
}


export default Login ;
