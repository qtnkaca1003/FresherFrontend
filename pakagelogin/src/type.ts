import { ReactNode } from "react";
export interface IAccount {
  username?: string;
  password?: string;
}
export interface IPageLogin {
  //Title
  textAlignTitle?: "left" | "center" | "right";
  paddingTitle?: string;
  colorTitle?: string;
  fontSizeTitle?: string;
  fontFamilyTitle?: string;
  textTitle?: string;
  //Link
  fontSizeLink?: string;
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
  fontFamilyLink?: string;
  colorLink?: string;
  textAlignLink?: "left" | "center" | "right";
  textDecorationLink?: string;
  hrefLink?: string;
  lineHeightLink?: string;
  children?: ReactNode;

  //Button
  typeButton?: "button" | "submit" | "reset";
  sizeButton?: "small" | "medium" | "large";
  backgroundButton?: string;
  cursorButton?: string;
  colorButton?: string;
  fontSizeButton?: string;
  fontWeightButton?: string;
  disabledButton?: boolean;
  borderButton?: string;
  borderRadiusButton?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textButton?: string;
  backgroundButtonHover?: string;
  //Text
  textText?: string;
  fontSizeText?: string;
  fontFamilyText?: string;
  lineHeightText?: string;
  colorText?: string;
  textAlignText?: "left" | "center" | "right";
  paddingText?: string;
  //Label
  fontFamilyLabel?: string;
  classNameLabel?: string;
  fontSizeLabel?: string;
  colorLabel?: string;
  lineHeightLabel?: string;
  paddingLabel?: string;
  textLabel?: string;
  //input
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  outlineInput?: string;
  borderInput?: string;
  fontFamilyInput?: string;
  fontSizeInput?: string;
  colorInput?: string;
  lineHeightInput?: string;
  displayInput?: string;
  widthInput?: string;
  heightInput?: string;
  backgroundInput?: string;
  paddingInput?: string;
  iconInput?: ReactNode;
  classNameInput?: string;
  placeholderInput?: string;

  //FormItem
  fontLabelFamilyFormItem?: string;
  fontSizeLabelFormItem?: string;
  colorLabelFormItem?: string;
  paddingLabelFormItem?: string;
  textLabelFormItem?: string;
  onChangeFormItem?: React.ChangeEventHandler<HTMLInputElement>;
  outlineFormItem?: string;
  borderFormItem?: string;
  fontFamilyFormItem?: string;
  fontSizeFormItem?: string;
  colorFormItem?: string;
  lineHeightFormItem?: string;
  widthFormItem?: string;
  heightFormItem?: string;
  paddingFormItem?: string;
  placeholderFormItem?: string;
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
  butonLogin?: React.MouseEventHandler<HTMLButtonElement>;
  butonLoginFb?: React.MouseEventHandler<HTMLParagraphElement>;
  butonLoginGg?: React.MouseEventHandler<HTMLParagraphElement>;
  butonLoginEm?: React.MouseEventHandler<HTMLParagraphElement>;
}
