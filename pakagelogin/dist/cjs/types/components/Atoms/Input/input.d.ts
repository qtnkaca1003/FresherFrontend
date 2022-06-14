import { ReactNode } from "react";
import "./input.scss";
interface IInput {
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder?: string;
    textlebel?: string;
    icon?: ReactNode;
    children?: ReactNode;
}
declare const Input: (PropsTitle: IInput) => JSX.Element;
export default Input;
