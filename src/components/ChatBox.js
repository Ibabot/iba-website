import React from 'react';
import { Widget } from 'rasa-webchat';
import './chatbox.scss';
import chat from "../assets/img/chat.png";
import robot from "../assets/img/iba-avatar.png";

function ChatBox() {
    function checkIfGeolocation() {
      console.log("the bot said something");
      let messageCount = document.querySelectorAll(".response .message-text").length;
      let response = document.querySelectorAll(".response .message-text .markdown p span")[messageCount - 1].textContent;
      console.log(response);
      if (response === "Ok!") {
        console.log("Ok it is");
        fetch("http://localhost:5006/webhooks/rest/webhook", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            sender: "Rasa",
            message: "64.153960 -21.950570"
          })
        });
      }
    }

    return (
      <Widget
        interval={2000}
        socketUrl={"http://localhost:5006"}
        socketPath={"/socket.io/"}
        onSocketEvent={{
          'bot_uttered': () => checkIfGeolocation(),
          'connect': () => console.log('connection established'),
        }}
        title={"Íba"}
        subtitle={"Íslandsbanki"}
        inputTextFieldHint={"Sláðu inn skilaboð..."}
        connectingText={"Waiting for server..."}
        hideWhenNotConnected={false}
        connectOn={"mount"}
        embedded={true}
        profileAvatar={robot}
        showFullScreenButton={false}
        openLauncherImage={chat}
        closeLauncherImage="myCustomCloseImage.png"
        displayUnreadCount={true} // --> [view](./assets/unread_count_pastille.png)
        showMessageDate={true} // display message date, can use fonction as (timestamp, message) => return 'my custom date'
        params={{
          images: {
            dims: {
              width: 300,
              height: 200
            }
          },
          storage: "session"
        }}
        customComponent={messageData => <div>Custom React component</div>}
      />
    );
}

export default ChatBox;