import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Input from "../Input";

describe("Running Test for Marbella Input", () => {
  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello marbella" />);
    expect(screen.getByPlaceholderText("Hello marbella")).toHaveAttribute(
      "placeholder",
      "Hello marbella"
    );
  });
  test("check disable input", () => {
    render(<Input placeholder="Hello" disabled />);
    expect(screen.getByPlaceholderText("Hello")).toBeDisabled();
  });
});
