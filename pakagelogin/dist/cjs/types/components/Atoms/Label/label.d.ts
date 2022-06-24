import { ReactNode } from "react";
import "./label.scss";
interface ILabel {
    text?: string;
    children?: ReactNode;
    className?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    lineHeight?: string;
    padding?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
}
declare const Label: (PropsLabel: ILabel) => JSX.Element;
export default Label;
