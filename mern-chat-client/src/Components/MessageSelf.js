import React from "react" ;


function MessageSelf() {
    var props2 = { name: "You", message: "This is a sample message\nSome more content" } ;

    return (
        <div className = "self-message-container">
            <div className = "messageBox">
                <p className = "con-last-message">{ props2.message }</p>
                <p className = "self-timestamp">12:00am</p>
            </div>
        </div>
    ) ;
}


export default MessageSelf ;


// import React from "react";

// function MessageSelf() {
//     var props2 = { name: "You", message: "This is a sample message\nSome more content" };

//     // Split the message by newline characters and map each line to a JSX element
//     var messageLines = props2.message.split('\n').map((line, index) => <p key={index}>{line}</p>);

//     return (
//         <div className="self-message-container">
//             <div className="messageBox">
//                 {/* Render the message lines */}
//                 <div className="con-last-message">{messageLines}</div>
//                 <p className="self-timestamp">12:00am</p>
//             </div>
//         </div>
//     );
// }

// export default MessageSelf;

