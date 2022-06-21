import { ReactNode } from "react";
import "./orsignup.scss";
interface IOrSignUp {
    fontSizeText?: string;
    colorText?: string;
    IconFb?: ReactNode;
    IconGg?: ReactNode;
    IconEm?: ReactNode;
    LoginFb?: any;
    LoginGg?: any;
    LoginEm?: any;
}
declare const OrSignUp: (PropsOrSign: IOrSignUp) => JSX.Element;
export default OrSignUp;
