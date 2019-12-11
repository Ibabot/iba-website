import React from "react";
import ReactDOM from "react-dom";
import ChatBox from "./ChatBox";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRenderer from "react-test-renderer";


// NOTE: FURTHER TESTING HAS BEEN IMPLEMENTED IN THE COMPONENT'S PACKAGE ITSELF
afterEach(cleanup);

it("ChatBox.js: renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ChatBox />, div);
});

it("ChatBox.js: matches snapshot", () => {
  const tree = testRenderer.create(<ChatBox />).toJSON();
  expect(tree).toMatchSnapshot();
});