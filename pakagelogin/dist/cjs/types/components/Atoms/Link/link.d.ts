import { ReactNode } from "react";
import "./link.scss";
interface ILink {
    text?: string;
    link?: string;
    children?: ReactNode;
}
declare const Link: (PropsLink: ILink) => JSX.Element;
export default Link;
