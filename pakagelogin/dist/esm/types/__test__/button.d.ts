import { MouseEventHandler, ReactNode } from "react";
interface IButton {
    text?: string;
    className?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    cursor?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    width?: string;
    border?: string;
    height?: string;
    borderRadius?: string;
    background?: any;
}
declare const Button: (PropsButton: IButton) => JSX.Element;
export default Button;
