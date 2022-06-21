import  * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { render, screen } from "@testing-library/react";
import App from '../App';

test('renders learn react link', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root)
  expect(root.querySelector("h1")?.textContent).toBe("Login")
  expect(root.querySelector("span")?.textContent).toBe("Username")
});