import { ReactNode } from "react";
import "./link.scss";
interface ILink {
    text?: string;
    href?: string;
    textDecoration?: "none" | string;
    fontFamily?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    fontSize?: string;
    lineHeight?: string;
    color?: string;
    children?: ReactNode;
    textAlign?: "center" | "left" | "right";
}
declare const Link: (PropsLink: ILink) => JSX.Element;
export default Link;
