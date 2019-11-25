import React from 'react';
import { Widget } from 'rasa-webchat';
import './chatbox.scss';
import chat from "../assets/img/chat.png";
import robot from "../assets/img/iba-avatar.png";

function ChatBox() {
    return (
      <Widget
        interval={2000}
        socketUrl={"https://ibachatbot.herokuapp.com/"}
        socketPath={"/socket.io/"}
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