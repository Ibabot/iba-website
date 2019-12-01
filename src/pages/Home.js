import React, { Component } from 'react';
import ChatBox from '../components/ChatBox';
import Geolocator from "../components/Geolocator";


class Home extends Component {
    render() {
        return (
          <div className="App">
            <Geolocator />
            <div className="chat-container">
              <ChatBox />
            </div>
          </div>
        );
    }
}
export default Home;