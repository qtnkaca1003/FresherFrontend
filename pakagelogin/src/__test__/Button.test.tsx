import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as ReactDOM from "react-dom";
import Button from "./button";

describe("Running Test for Button ", () => {
  /**
   * @jest-environment jsdom
   */
  test("render Button ", () => {
    render(<Button text="Button" className="bgbtn__btn"></Button>);
    
  });
  it("test class name button", () => {
    render(<Button text="Button" className="bgbtn__btn"></Button>);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toHaveClass("bgbtn__btn");
   
  });
  it("test disabled button", () => {
    render(<Button text="Button" disabled={true} />);
    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeDisabled();
  });
});
