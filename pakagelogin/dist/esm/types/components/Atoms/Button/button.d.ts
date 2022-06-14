import { MouseEventHandler, ReactNode } from "react";
import "./button.scss";
interface IButton {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}
declare const Button: (PropsButton: IButton) => JSX.Element;
export default Button;
