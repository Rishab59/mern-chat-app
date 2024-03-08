import "./ComponentsStyles.css" ;

import React from "react" ;

import MessageSelf from "./MessageSelf" ;
import MessageOthers from "./MessageOthers" ;

import { IconButton } from "@mui/material" ;
import DeleteIcon from "@mui/icons-material/Delete" ;
import SendIcon from "@mui/icons-material/Send" ;


function ChatArea({ props }) {
    return (
        <div className = "chatArea-container" >
            <div className = "chatArea-header">
                <p className = "con-icon">{ props.name[0] }</p>
                <div className = "header-text">
                    <p className = "con-title">{ props.name }</p>
                    <p className = "con-timestamp">{ props.timestamp }</p>
                </div>

                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>

            <div className = "message-container">
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>

            <div className = "text-input-area">
                <input className = "search-box" placeholder = "Type your message here..." />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    ) ;
}


export default ChatArea ;
