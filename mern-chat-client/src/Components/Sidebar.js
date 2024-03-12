import React, { useState } from "react" ;

import { IconButton } from "@mui/material" ;
import AccountCircleIcon from "@mui/icons-material/AccountCircle" ;
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';

import SearchIcon from '@mui/icons-material/Search';

import ConversationsItem from "./ConversationsItem";


function Sidebar() {
    const [conversations, setConversations] = useState([
        {
            name: "Test_1",
            lastMessage: "Last message 1",
            timestamp: "today",
        },
        {
            name: "Test_2",
            lastMessage: "Last message 2",
            timestamp: "today",
        },
        {
            name: "Test_3",
            lastMessage: "Last message 3",
            timestamp: "today",
        },
    ]) ;

    return (
        <div className = "sidebar-container">
            <div className = "sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>

                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>

            <div className = "sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input className = "search-box" placeholder = "Search" />
            </div>

            <div className = "sb-conversations">
                {/* <ConversationsItem /> */}
                {  conversations.map((conversation) => {
                    return <ConversationsItem props = {conversation} key = { conversation.name } />
                }) }
            </div>
        </div>
    ) ;
}


export default Sidebar ;
