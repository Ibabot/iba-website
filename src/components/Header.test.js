import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRenderer from "react-test-renderer";

afterEach(cleanup);

it("Header.js: renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

it("Header.js: matches snapshot", () => {
  const tree = testRenderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Header.js: renders 'Get assistance' button correctly", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("get-assistance")).toHaveTextContent(
    "Hafðu samband við þjónustuver bankans"
  );
});

it("Header.js: 'Get assistance' button leads to correct URL", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("get-assistance").getAttribute("href")).toBe(
    "https://www.islandsbanki.is/is/vara/thjonusta/hafa-samband"
  );
});

it("Header.js: facebook link opens correct URL", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("open-facebook").getAttribute("href")).toBe("https://www.messenger.com/t/iba.spjallmenni");
});

