import { ReactNode } from "react";
import "./title.scss";
interface ITitle {
    text?: string;
    children?: ReactNode;
    textAlign?: "left" | "center" | "right";
    padding?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    fontFamily?: string;
}
declare const Title: (PropsTitle: ITitle) => JSX.Element;
export default Title;
