import React from "react" ;

import { IconButton } from "@mui/material" ;
import SearchIcon from '@mui/icons-material/Search' ;

import logo from "../icons/live-chat-icon.png" ;


function Users_Group() {
    return (
        <div className = "list-container">
            <div className = "ug-header">
                <img src = { logo } alt = "logo" style = {{ height: "2.5rem", width: "2.5rem" }} />
                <p className = "ug-title">Online Users</p>
            </div>

            <div className = "sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input className = "search-box" placeholder = "Search" />
            </div>

            <div className = "ug-list">
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
                <div className = "list-tem">
                    <p className = "con-icon">T</p>
                    <p className = "con-title">Test User</p>
                </div>
            </div>
        </div>
    ) ;
}


export default Users_Group ;
