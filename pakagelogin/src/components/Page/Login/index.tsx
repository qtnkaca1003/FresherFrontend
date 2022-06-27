import React, { ReactNode } from "react";
import Login from "../../Templates";
import "./styleIndex.scss";
import "./style.css";
import { EmailIcon } from "../../Atoms/Icon/IconEmail";
import { FbIcon } from "../../Atoms/Icon/IconFb";
import { GgIcon } from "../../Atoms/Icon/IconGg";
interface IPageLogin {
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
const PageIndex = (PropsPage: IPageLogin) => {
  return (
    <div className="page_login">
      <div className="container">
        <Login
          onSubmit={PropsPage.onSubmit}
          backgroundButton={PropsPage.backgroundButton}
          backgroundHover={PropsPage.backgroundHover}
          borderButton={PropsPage.borderButton}
          borderInput={PropsPage.borderInput}
          borderRadiusButton={PropsPage.borderRadiusButton}
          colorButton={PropsPage.colorButton}
          colorInput={PropsPage.colorInput}
          colorLabel={PropsPage.colorLabel}
          colorLink={PropsPage.colorLink}
          colorText={PropsPage.colorText}
          colorTitle={PropsPage.colorTitle}
          cursorButton={PropsPage.cursorButton}
          fontFamilyInput={PropsPage.fontFamilyInput}
          fontFamilyLabel={PropsPage.fontFamilyLabel}
          fontFamilyLink={PropsPage.fontFamilyLink}
          fontFamilyText={PropsPage.fontFamilyText}
          fontFamilyTitle={PropsPage.fontFamilyTitle}
          fontSizeButton={PropsPage.fontSizeButton}
          fontSizeInput={PropsPage.fontSizeInput}
          heightInput={PropsPage.heightInput}
          hrefLink={PropsPage.hrefLink}
          lineHeightInput={PropsPage.lineHeightInput}
          lineHeightLabel={PropsPage.lineHeightLabel}
          lineHeightLink={PropsPage.lineHeightLink}
          paddingInput={PropsPage.paddingInput}
          paddingLabel={PropsPage.paddingLabel}
          paddingText={PropsPage.paddingText}
          paddingTitle={PropsPage.paddingTitle}
          placeholderInput={PropsPage.placeholderInput}
          sizeButton={PropsPage.sizeButton}
          textAlignTitle={PropsPage.textAlignTitle}
          textButton={PropsPage.textButton}
          textLabel={PropsPage.textLabel}
          textTitle={PropsPage.textTitle}
          typeButton={PropsPage.typeButton}
          typeInput={PropsPage.typeInput}
          widthInput={PropsPage.widthInput}
          outlineInput={PropsPage.outlineInput}
          onChangeUserName={PropsPage.onChangeUserName}
          onChangePassword={PropsPage.onChangePassword}
          fontSizeLabel={PropsPage.fontSizeLabel}
          fontSizeLink={PropsPage.fontSizeLink}
          fontSizeText={PropsPage.fontSizeText}
          fontSizeTitle={PropsPage.fontSizeTitle}
          fontWeight={PropsPage.fontWeight}
          LoginEm={PropsPage.LoginEm}
          LoginFb={PropsPage.LoginFb}
          LoginGg={PropsPage.LoginGg}
          IconEm={<EmailIcon />}
          IconFb={<FbIcon />}
          IconGg={<GgIcon />}
          appId={PropsPage.appId}
          callback={PropsPage.callback}
          onClickFb={PropsPage.onClickFb}
          clientId={PropsPage.clientId}
          onFailure={PropsPage.onFailure}
          onSuccess={PropsPage.onSuccess}
        />
      </div>
    </div>
  );
};
export default PageIndex;
