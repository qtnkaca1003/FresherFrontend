import React, { ReactNode } from "react";
import FormLogin from "../Organisms/FormLogin/login";
import "./style.scss";
interface ILogin {
  //Title
  fontWeightTitle?:
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "lighter"
    | "normal"
    | "initial";
  paddingTitle?: string;
  textTitle?: string;
  colorTitle?: string;
  fontSizeTitle?: string;
  fontFamilyTitle?: string;
  textAlignTitle?: "left" | "center" | "right";
  typeInput?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
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
  //Label
  fontWeightLabel?:
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "lighter"
    | "normal"
    | "initial";
  textLabel?: string;
  classNameLabel?: string;
  paddingLabel?: string;
  fontFamilyLabel?: string;
  fontSizeLabel?: string;
  colorLabel?: string;
  lineHeightLabel?: string;
  //Link
  colorLink?: string;
  fontFamilyLink?: string;
  fontSizeLink?: string;
  lineHeightLink?: string;
  hrefLink?: string;
  //button
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
  //OrSingUp
  IconFb?: ReactNode;
  IconGg?: ReactNode;
  IconEm?: ReactNode;
  LoginFb?: any;
  LoginGg?: any;
  LoginEm?: any;
  //text
  fontWeight?:
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "lighter"
    | "normal"
    | "initial";
  fontFamilyText?: string;
  fontSizeText?: string;
  colorText?: string;
  paddingText?: string;
  onSubmit?: React.FormEventHandler;
  onChangePassword?: React.ChangeEventHandler<HTMLInputElement>;
  onChangeUserName?: React.ChangeEventHandler<HTMLInputElement>;

  appId: string;
  onClickFb?: any;
  callback: any;

  clientId: string;
  onSuccess: any;
  onFailure: any;
}
const Login = (PropsLogin: ILogin) => {
  return (
    <div className="wapper__login">
      <div className="wapper__login__form">
        <FormLogin
          backgroundButton={PropsLogin.backgroundButton}
          onSubmit={PropsLogin.onSubmit}
          backgroundHover={PropsLogin.backgroundHover}
          borderButton={PropsLogin.borderButton}
          borderInput={PropsLogin.borderInput}
          borderRadiusButton={PropsLogin.borderRadiusButton}
          colorButton={PropsLogin.colorButton}
          colorInput={PropsLogin.colorInput}
          colorLabel={PropsLogin.colorLabel}
          colorLink={PropsLogin.colorLink}
          colorText={PropsLogin.colorText}
          colorTitle={PropsLogin.colorTitle}
          cursorButton={PropsLogin.cursorButton}
          fontFamilyInput={PropsLogin.fontFamilyInput}
          fontFamilyLabel={PropsLogin.fontFamilyLabel}
          fontFamilyLink={PropsLogin.fontFamilyLink}
          fontFamilyText={PropsLogin.fontFamilyText}
          fontFamilyTitle={PropsLogin.fontFamilyTitle}
          fontSizeButton={PropsLogin.fontSizeButton}
          fontSizeInput={PropsLogin.fontSizeInput}
          heightInput={PropsLogin.heightInput}
          hrefLink={PropsLogin.hrefLink}
          lineHeightInput={PropsLogin.lineHeightInput}
          lineHeightLabel={PropsLogin.lineHeightLabel}
          lineHeightLink={PropsLogin.lineHeightLink}
          paddingInput={PropsLogin.paddingInput}
          paddingLabel={PropsLogin.paddingLabel}
          paddingText={PropsLogin.paddingText}
          paddingTitle={PropsLogin.paddingTitle}
          placeholderInput={PropsLogin.placeholderInput}
          sizeButton={PropsLogin.sizeButton}
          textAlignTitle={PropsLogin.textAlignTitle}
          textButton={PropsLogin.textButton}
          textLabel={PropsLogin.textLabel}
          textTitle={PropsLogin.textTitle}
          typeButton={PropsLogin.typeButton}
          typeInput={PropsLogin.typeInput}
          widthInput={PropsLogin.widthInput}
          outlineInput={PropsLogin.outlineInput}
          onChangeUserName={PropsLogin.onChangeUserName}
          onChangePassword={PropsLogin.onChangePassword}
          fontSizeLabel={PropsLogin.fontSizeLabel}
          fontSizeLink={PropsLogin.fontSizeLink}
          fontSizeText={PropsLogin.fontSizeText}
          fontSizeTitle={PropsLogin.fontSizeTitle}
          fontWeight={PropsLogin.fontWeight}
          LoginEm={PropsLogin.LoginEm}
          LoginFb={PropsLogin.LoginFb}
          LoginGg={PropsLogin.LoginGg}
          IconEm={PropsLogin.IconEm}
          IconFb={PropsLogin.IconFb}
          IconGg={PropsLogin.IconGg}
          appId={PropsLogin.appId}
          callback={PropsLogin.callback}
          onClickFb={PropsLogin.onClickFb}
          clientId={PropsLogin.clientId}
          onFailure={PropsLogin.onFailure}
          onSuccess={PropsLogin.onSuccess}
        />
      </div>
    </div>
  );
};
export default Login;
