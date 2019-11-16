import React from 'react';
import { Widget } from 'rasa-webchat';

function ChatBox() {
    return (
        <Widget
            interval={2000}
            socketUrl={"http://localhost:5005"}
            socketPath={"/socket.io/"}
            title={"Íba"}
            inputTextFieldHint={"Type a message..."}
            connectingText={"Waiting for server..."}
            hideWhenNotConnected={false}
            connectOn={"mount"}
            embedded={true}
            showFullScreenButton={false}
            openLauncherImage="myCustomOpenImage.png"
            closeLauncherImage="myCustomCloseImage.png"
            displayUnreadCount={true} // --> [view](./assets/unread_count_pastille.png)
            showMessageDate={false} // display message date, can use fonction as (timestamp, message) => return 'my custom date'
            params={{
                images: {
                    dims: {
                        width: 300,
                        height: 200
                    }
                },
                storage: "local"
            }}
            customComponent={(messageData) => (<div>Custom React component</div>)}
        />
    )
}

export default ChatBox;