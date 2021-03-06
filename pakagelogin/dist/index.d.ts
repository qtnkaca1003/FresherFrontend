import React, { ReactNode } from 'react';
import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z$1 = ".page_login {\n  background-image: url(\"../../../assets/images/bg-01.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.page_login .container {\n  padding: 15px;\n}";
styleInject(css_248z$1);

var css_248z = "@font-face {\r\n  font-family: 'Poppins-Regular';\r\n  src:\r\n    url('./assets/fonts/Poppins-Regular.woff') format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Poppins-Bold';\r\n  src:\r\n    url('./assets/fonts/Poppins-Bold.woff') format('woff');\r\n  font-weight: bold;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Poppins-Medium';\r\n  src:\r\n    url('./assets/fonts/Poppins-Medium.woff') format('woff');\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: fallback;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}";
styleInject(css_248z);

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
    butonLoginFb?: ReactNode;
    butonLoginGg?: React.MouseEventHandler<HTMLParagraphElement>;
    butonLoginEm?: React.MouseEventHandler<HTMLParagraphElement>;
    fontWeight?: 500 | 600 | 700 | 800 | 900 | "bold" | "bolder" | "lighter" | "normal" | "initial";
    fontFamilyText?: string;
    fontSizeText?: string;
    colorText?: string;
    paddingText?: string;
    onChangeUserName?: React.ChangeEventHandler<HTMLInputElement>;
    onChangePassword?: React.ChangeEventHandler<HTMLInputElement>;
    onSubmit?: React.FormEventHandler;
}
declare const PageIndex: (PropsPage: IPageLogin) => JSX.Element;

export { PageIndex };
