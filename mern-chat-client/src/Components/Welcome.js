import React from "react" ;

import logo from "../icons/live-chat-icon.png" ;

function Welcome() {
    return (
        <div className = "welcome-container">
            <img className = "welcome-logo" src = { logo } alt = "Live Chat Icon" />
            <p>View and Text directly to people in the chat room</p>
        </div>
    ) ;
}


export default Welcome ;
