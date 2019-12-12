import React from "react";

import "./App.scss";

import ChatBox from "./components/ChatBox";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="iba-web">
        <Header />
        <div className="chat-container">
          <ChatBox />
        </div>
      </div>
    </div>
  )
}

export default App;