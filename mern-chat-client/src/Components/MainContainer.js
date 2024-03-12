import "./ComponentsStyles.css" ;

import React, { useState } from "react" ;

import Sidebar from "./Sidebar" ;
import ChatArea from "./ChatArea";
import Welcome from "./Welcome" ;
import CreateGroups from "./CreateGroups";


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
      <Welcome />
      {/* <CreateGroups /> */}
      {/* <ChatArea props = { conversations[0] } /> */}
    </div>
  ) ;
}


export default MainContainer ;
