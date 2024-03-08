import "./ComponentsStyles.css" ;

import React, { useState } from "react" ;

import Sidebar from "./Sidebar" ;
import ChatArea from "./ChatArea";


function MainContainer() {
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
    <div className = "main-container">
      <Sidebar />
      <ChatArea props = { conversations[0] } />
    </div>
  ) ;
}


export default MainContainer ;
