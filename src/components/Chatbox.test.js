import React from "react";
import ReactDOM from "react-dom";
import ChatBox from "./ChatBox";


it("renders ChatBox.js without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ChatBox />, div)
})