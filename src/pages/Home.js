import React, { Component } from 'react';
import ChatBox from '../components/ChatBox';
import Geolocator from "../components/Geolocator";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getLocation: false
    };
  }

  update(value) {
    return () => {
      this.setState({
        getLocation: value
      });
    };
  }

  render() {
    return (
      <div className="App">
        <Geolocator data={this.update.bind(this)} />
        <div className="chat-container">
          <ChatBox data={this.update.bind(this)} />
        </div>
      </div>
    );
  }
}
export default Home;