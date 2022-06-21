import { ReactNode } from "react";
import "./text.scss";
interface IText {
    text?: string;
    children?: ReactNode;
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    color?: string;
    textAlign?: "center" | "left" | "right";
    padding?: string;
}
declare const Text: (PropsText: IText) => JSX.Element;
export default Text;
