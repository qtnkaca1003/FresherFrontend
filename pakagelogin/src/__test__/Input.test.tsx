import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import Input from "./input";
/**
 * @jest-environment jsdom
 */
describe("Running Test for Input ", () => {
  it("render Input ", () => {
    render(<Input type="text"/>)
  /*   render(<Input type="text" placeholder="Some thing..." />);
 */
  });
  it("test Input", () => {
    render(<Input type="text" placeholder="Test Input" />);
    const input = screen.getByPlaceholderText("Test Input");
    expect(input).toHaveAttribute("placeholder", "Test Input");
  });
});
