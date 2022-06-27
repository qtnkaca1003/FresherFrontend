/// <reference types="react" />
import React, { ReactNode, MouseEventHandler } from 'react';
import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z$a = ".page_login {\n  background-image: url(\"../../../assets/images/bg-01.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.page_login .container {\n  padding: 15px;\n}";
styleInject(css_248z$a);

var css_248z$9 = "@font-face {\r\n  font-family: 'Poppins-Regular';\r\n  src:\r\n    url('./assets/fonts/Poppins-Regular.woff') format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Poppins-Bold';\r\n  src:\r\n    url('./assets/fonts/Poppins-Bold.woff') format('woff');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Poppins-Medium';\r\n  src:\r\n    url('./assets/fonts/Poppins-Medium.woff') format('woff');\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}";
styleInject(css_248z$9);

interface IPageLogin {
    fontWeightTitle?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    paddingTitle?: string;
    textTitle?: string;
    colorTitle?: string;
    fontSizeTitle?: string;
    fontFamilyTitle?: string;
    textAlignTitle?: "left" | "center" | "right";
    typeInput?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    icon?: ReactNode;
    placeholderInput?: string;
    outlineInput?: string;
    borderInput?: string;
    fontFamilyInput?: string;
    fontSizeInput?: string;
    colorInput?: string;
    lineHeightInput?: string;
    widthInput?: string;
    heightInput?: string;
    paddingInput?: string;
    classNameInput?: string;
    iconInput?: ReactNode;
    fontWeightLabel?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    textLabel?: string;
    classNameLabel?: string;
    paddingLabel?: string;
    fontFamilyLabel?: string;
    fontSizeLabel?: string;
    colorLabel?: string;
    lineHeightLabel?: string;
    colorLink?: string;
    fontFamilyLink?: string;
    fontSizeLink?: string;
    lineHeightLink?: string;
    hrefLink?: string;
    typeButton: "button" | "reset" | "submit";
    sizeButton?: "small" | "medium" | "large";
    textButton?: string;
    colorButton?: string;
    fontSizeButton?: string;
    cursorButton?: string;
    backgroundButton?: string;
    backgroundHover?: string;
    borderRadiusButton?: string;
    borderButton?: string;
    IconFb?: ReactNode;
    IconGg?: ReactNode;
    IconEm?: ReactNode;
    LoginFb?: any;
    LoginGg?: any;
    LoginEm?: any;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    fontFamilyText?: string;
    fontSizeText?: string;
    colorText?: string;
    paddingText?: string;
    onChangeUserName?: React.ChangeEventHandler<HTMLInputElement>;
    onChangePassword?: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit?: React.FormEventHandler;
    appId: string;
    onClickFb?: any;
    callback: any;
    clientId: string;
    onSuccess: any;
    onFailure: any;
}
declare const PageIndex: (PropsPage: IPageLogin) => JSX.Element;

var css_248z$8 = ".input {\n  font-family: Poppins-Medium;\n  border: 0;\n  outline: none;\n  font-size: 16px;\n  color: #333333;\n  line-height: 1.2;\n  display: block;\n  width: 390px;\n  height: 55px;\n  background: transparent;\n  padding: 0 7px 0 43px;\n}\n\n::placeholder {\n  color: rgb(118, 118, 118);\n  font-family: Poppins-Medium;\n  font-size: 14px;\n}";
styleInject(css_248z$8);

interface IInput {
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    placeholder?: string;
    textlebel?: string;
    icon?: ReactNode;
    className?: string;
    outline?: string;
    border?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    lineHeight?: string;
    display?: string;
    width?: string;
    height?: string;
    background?: string;
    padding?: string;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const Input: (PropsInput: IInput) => JSX.Element;

var css_248z$7 = ".bgbtn {\n  position: relative;\n  border-radius: 50px;\n  background: rgb(0, 219, 222);\n  background: linear-gradient(to right, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%, rgb(252, 0, 255) 100%);\n  opacity: 1;\n  z-index: 2;\n}\n.bgbtn__hiden {\n  border-radius: 50px;\n  border-radius: 50px;\n  width: 100%;\n  height: 100%;\n  background: rgb(252, 0, 255);\n  background: linear-gradient(to right, rgb(252, 0, 255) 0%, rgb(0, 219, 222) 100%);\n  z-index: 0;\n  transition: opacity 0.3s;\n  transform: scaleX(0);\n  transform-origin: left;\n  opacity: 0;\n}\n.bgbtn:hover .bgbtn__hiden {\n  transform: scaleX(1);\n  transform-origin: left;\n  transition: opacity 0.3s linear;\n  opacity: 1;\n}\n.bgbtn__btn {\n  cursor: pointer;\n  border: 0;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50px;\n  position: absolute;\n  top: 0;\n  background: initial;\n  z-index: 2;\n}";
styleInject(css_248z$7);

interface IButton {
    text?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    type: "button" | "reset" | "submit";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    cursor?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    border?: string;
    borderRadius?: string;
    background?: string;
    backgroundHover?: string;
}
declare const Button: (PropsButton: IButton) => JSX.Element;

var css_248z$6 = ".label {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  color: #333333;\n  line-height: 1.5;\n  padding-left: 7px;\n}";
styleInject(css_248z$6);

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

var css_248z$5 = ".link {\n  display: block;\n  text-decoration: none;\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\n.link:hover {\n  color: #a64bf4;\n  cursor: pointer;\n}";
styleInject(css_248z$5);

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

var css_248z$4 = ".text {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n}";
styleInject(css_248z$4);

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

var css_248z$3 = ".title {\n  font-family: Poppins-Bold;\n  font-size: 39px;\n  color: #333333;\n  text-align: center;\n}";
styleInject(css_248z$3);

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

declare const GgIcon: () => JSX.Element;

declare const FbIcon: () => JSX.Element;

declare const EmailIcon: () => JSX.Element;

declare const LockIcon: () => JSX.Element;

declare const UserIcon: () => JSX.Element;

var css_248z$2 = ".wapper__formitem {\n  position: relative;\n  width: 390px;\n  border-bottom: 1px solid #d9d9d9;\n}\n.wapper__formitem__input {\n  display: block;\n}\n.wapper__formitem .input:focus + .wapper__formitem__focus::before {\n  width: 100%;\n}\n.wapper__formitem .input:focus + .wapper__formitem__focus .icon svg {\n  fill: #a64bf4;\n}\n.wapper__formitem__focus {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.wapper__formitem__focus::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 1px;\n  background: #7f7f7f;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n  box-sizing: inherit;\n}\n.wapper__formitem__focus .icon {\n  padding-left: 13px;\n  padding-top: 3px;\n  position: absolute;\n  bottom: 50%;\n  top: 50%;\n}";
styleInject(css_248z$2);

interface IFormItem {
    typeInput?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    icon?: ReactNode;
    placeholderInput?: string;
    outlineInput?: string;
    borderInput?: string;
    fontFamilyInput?: string;
    fontSizeInput?: string;
    colorInput?: string;
    lineHeightInput?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    widthInput?: string;
    heightInput?: string;
    paddingInput?: string;
    classNameInput?: string;
    iconInput?: ReactNode;
    required?: boolean;
    fontWeightLabel?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    textLabel?: string;
    classNameLabel?: string;
    paddingLabel?: string;
    fontFamilyLabel?: string;
    fontSizeLabel?: string;
    colorLabel?: string;
    lineHeightLabel?: string;
}
declare const FormItem: (PropsFormItem: IFormItem) => JSX.Element;

var css_248z$1 = ".wapper__orsignup {\n  width: 390px;\n  text-align: center;\n}\n.wapper__orsignup__text {\n  padding: 0 0 20px;\n}\n.wapper__orsignup__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wapper__orsignup__icon__fb {\n  margin: 5px;\n  width: 48px;\n  cursor: pointer;\n}\n.wapper__orsignup__icon__fb:hover {\n  fill: \"#red\";\n}\n.wapper__orsignup__icon__fb:hover {\n  fill: \"#red\";\n}\n.wapper__orsignup__icon__gg {\n  width: 48px;\n  margin: 5px;\n  cursor: pointer;\n}\n.wapper__orsignup__icon__gg:hover {\n  fill: \"#000\";\n}\n.wapper__orsignup__icon__email {\n  width: 48px;\n  margin: 5px;\n  cursor: pointer;\n}\n.wapper__orsignup__icon__email:hover {\n  fill: \"#000\";\n}";
styleInject(css_248z$1);

interface IOrSignUp {
    fontSizeText?: string;
    colorText?: string;
    IconFb?: ReactNode;
    IconGg?: ReactNode;
    IconEm?: ReactNode;
    LoginFb?: any;
    LoginGg?: any;
    LoginEm?: any;
    appId?: string;
    onClickFb?: any;
    callback?: any;
    clientId: string;
    onSuccess?: any;
    onFailure?: any;
}
declare const OrSignUp: (PropsOrSign: IOrSignUp) => JSX.Element;

var css_248z = ".form__login {\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.form__login__username {\n  margin-bottom: 23px;\n}\n.form__login__password__forgot {\n  padding: 8px 0 31px;\n  text-align: right;\n}\n.form__login__control {\n  width: 390px;\n}\n.form__login__signup {\n  padding-top: 54px;\n}\n.form__login__sign_up {\n  padding-top: 155px;\n  text-align: center;\n}";
styleInject(css_248z);

interface IFormLogin {
    fontWeightTitle?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    paddingTitle?: string;
    textTitle?: string;
    colorTitle?: string;
    fontSizeTitle?: string;
    fontFamilyTitle?: string;
    textAlignTitle?: "left" | "center" | "right";
    typeInput?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    icon?: ReactNode;
    placeholderInput?: string;
    outlineInput?: string;
    borderInput?: string;
    fontFamilyInput?: string;
    fontSizeInput?: string;
    colorInput?: string;
    lineHeightInput?: string;
    widthInput?: string;
    heightInput?: string;
    paddingInput?: string;
    classNameInput?: string;
    iconInput?: ReactNode;
    required?: boolean;
    fontWeightLabel?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    textLabel?: string;
    classNameLabel?: string;
    paddingLabel?: string;
    fontFamilyLabel?: string;
    fontSizeLabel?: string;
    colorLabel?: string;
    lineHeightLabel?: string;
    colorLink?: string;
    fontFamilyLink?: string;
    fontSizeLink?: string;
    lineHeightLink?: string;
    hrefLink?: string;
    typeButton: "button" | "reset" | "submit";
    sizeButton?: "small" | "medium" | "large";
    textButton?: string;
    colorButton?: string;
    fontSizeButton?: string;
    cursorButton?: string;
    backgroundButton?: string;
    borderRadiusButton?: string;
    borderButton?: string;
    backgroundHover?: string;
    IconFb?: ReactNode;
    IconGg?: ReactNode;
    IconEm?: ReactNode;
    LoginFb?: any;
    LoginGg?: any;
    LoginEm?: any;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    fontFamilyText?: string;
    fontSizeText?: string;
    colorText?: string;
    paddingText?: string;
    onSubmit?: React.FormEventHandler;
    onChangeUserName?: React.ChangeEventHandler<HTMLInputElement>;
    onChangePassword?: React.ChangeEventHandler<HTMLInputElement>;
    appId: string;
    onClickFb?: any;
    callback: any;
    clientId: string;
    onSuccess: any;
    onFailure: any;
}
declare const FormLogin: (PropsForm: IFormLogin) => JSX.Element;

interface ILogoutGG {
    clientId: string;
    buttonText: string;
    onLogoutSuccess: any;
}
declare const LogoutGG: (PropLogout: ILogoutGG) => JSX.Element;

export { Button, EmailIcon, FbIcon, FormItem, FormLogin, GgIcon, Input, Label, Link, LockIcon, LogoutGG, OrSignUp, PageIndex, Text, Title, UserIcon };
