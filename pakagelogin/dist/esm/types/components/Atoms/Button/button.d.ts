import { MouseEventHandler, ReactNode } from "react";
import "./button.scss";
interface IButton {
    text?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    type: "button" | "reset" | "submit";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    cursor?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    border?: string;
    borderRadius?: string;
    background?: string;
    backgroundHover?: string;
}
declare const Button: (PropsButton: IButton) => JSX.Element;
export default Button;
