import { ReactNode } from "react";
import "./title.scss";
interface ITitle {
    text?: string;
    size?: "small" | "medium" | "large";
    children?: ReactNode;
}
declare const Title: (PropsTitle: ITitle) => JSX.Element;
export default Title;
