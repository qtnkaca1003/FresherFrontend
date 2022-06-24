/// <reference types="react" />
import "./orsignup.scss";
interface IOrSignUp {
    fontSizeText?: string;
    colorText?: string;
    LoginFb?: any;
    butonLoginGg?: any;
    butonLoginEm?: any;
}
declare const OrSignUp: (PropsOrSign: IOrSignUp) => JSX.Element;
export default OrSignUp;
