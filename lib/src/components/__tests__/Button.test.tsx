import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "../button";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(<Button title="Button" disabled />);
    expect(
      screen.getByRole("button", { name: "Button" })
    ).toBeDisabled();
  });
  
});
