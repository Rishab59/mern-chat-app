import React from "react" ;


function ConversationsItem({ props }) {
    return (
        <div className = "conversations-container" >
            <p className = "con-icon" >{ props.name[0] }</p>
            <p className = "con-title" >{ props.name }</p>
            <p className = "con-last-message" >{ props.lastMessage }</p>
            <p className = "con-timestamp" >{ props.timestamp }</p>
        </div>
  ) ;
}


export default ConversationsItem ;
