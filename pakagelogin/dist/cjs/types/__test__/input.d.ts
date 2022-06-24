import { ReactNode } from "react";
interface IInput {
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder?: string;
    textlebel?: string;
    icon?: ReactNode;
    children?: ReactNode;
    className?: string;
    outline?: string;
    border?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    lineHeight?: string;
    display?: string;
    width?: string;
    height?: string;
    background?: string;
    padding?: string;
}
declare const Input: (PropsInput: IInput) => JSX.Element;
export default Input;
