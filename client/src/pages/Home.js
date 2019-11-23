import React, { Component } from 'react';
import ChatBox from '../components/ChatBox';


class Home extends Component {
    render() {
        return (
          <div className="App">
            <div className="chat-container">
              <ChatBox />
            </div>
          </div>
        );
    }
}
export default Home;