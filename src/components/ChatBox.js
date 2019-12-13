import React from 'react';
import { Widget } from 'rasa-webchat';
import './chatbox.scss';
import chat from "../assets/img/chat.png";
import robot from "../assets/img/iba-avatar.png";

function ChatBox() {
    return (
      <Widget
        initPayload={"first-greet"}
        interval={2000}
        socketUrl={"https://ibachatbot.herokuapp.com"}
        socketPath={"/socket.io/"}
        customData={{"latitude":"64.153960", "longitude":"-21.950570"}}
        title={"Íba"}
        subtitle={"Íslandsbanki"}
        inputTextFieldHint={"Sláðu inn skilaboð..."}
        connectingText={"Bið eftir vefþjóni..."}
        hideWhenNotConnected={true}
        connectOn={"mount"}
        embedded={true}
        profileAvatar={robot}
        showFullScreenButton={false}
        openLauncherImage={chat}
        closeLauncherImage="myCustomCloseImage.png"
        displayUnreadCount={true} 
        showMessageDate={true}
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