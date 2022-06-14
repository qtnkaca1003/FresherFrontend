import { ReactNode } from "react";
import "./text.scss";
interface IText {
    text?: string;
    children?: ReactNode;
}
declare const Text: (PropsTitle: IText) => JSX.Element;
export default Text;
