import React, { ReactNode } from "react";
import Button from "../../Atoms/Button/button";
import { LockIcon } from "../../Atoms/Icon/IconLock";
import { UserIcon } from "../../Atoms/Icon/IconUser";
import Link from "../../Atoms/Link/link";
import Text from "../../Atoms/Text/text";
import Title from "../../Atoms/Title/title";
import FormItem from "../../Molecules/FormItem/formitem";
import OrSignUp from "../../Molecules/OrSignUp/orsignup";
import "./formlogin.scss";
interface IFormLogin {
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
  required?: boolean;
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
  borderRadiusButton?: string;
  borderButton?: string;
  backgroundHover?: string;
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
  //form
  onSubmit?: React.FormEventHandler;
  onChangeUserName?: React.ChangeEventHandler<HTMLInputElement>;
  onChangePassword?: React.ChangeEventHandler<HTMLInputElement>;
}
const FormLogin = (PropsForm: IFormLogin) => {
  return (
    <>
      <form onSubmit={PropsForm.onSubmit} className="form__login">
        <Title
          padding={PropsForm.paddingTitle}
          text={"Login"}
          color={PropsForm.colorTitle}
          fontSize={PropsForm.fontSizeTitle}
          fontFamily={PropsForm.fontFamilyTitle}
          fontWeight={PropsForm.fontWeightTitle}
          textAlign={PropsForm.textAlignTitle}
        />
        <div className="form__login__control form__login__username">
          <FormItem
            required={true}
            typeInput={"text"}
            fontFamilyLabel={PropsForm.fontFamilyLabel}
            onChange={PropsForm.onChangeUserName}
            borderInput={PropsForm.borderInput}
            colorInput={PropsForm.classNameInput}
            fontFamilyInput={PropsForm.fontFamilyInput}
            fontSizeInput={PropsForm.fontSizeInput}
            heightInput={PropsForm.heightInput}
            widthInput={PropsForm.widthInput}
            outlineInput={PropsForm.outlineInput}
            paddingLabel={PropsForm.paddingLabel}
            paddingInput={PropsForm.paddingInput}
            placeholderInput={"Type your username..."}
            iconInput={<UserIcon />}
          />
        </div>
        <div className="form__login__control form__login__password">
          <FormItem
            required={true}
            typeInput={"password"}
            fontFamilyLabel={PropsForm.fontFamilyLabel}
            onChange={PropsForm.onChangePassword}
            borderInput={PropsForm.borderInput}
            colorInput={PropsForm.classNameInput}
            fontFamilyInput={PropsForm.fontFamilyInput}
            fontSizeInput={PropsForm.fontSizeInput}
            heightInput={PropsForm.heightInput}
            widthInput={PropsForm.widthInput}
            outlineInput={PropsForm.outlineInput}
            paddingLabel={PropsForm.paddingLabel}
            paddingInput={PropsForm.paddingInput}
            placeholderInput={"Type your password..."}
            iconInput={<LockIcon />}
          />
          <div className="form__login__password__forgot">
            <Link
              color={PropsForm.colorLink}
              fontFamily={PropsForm.fontFamilyLink}
              fontSize={PropsForm.fontSizeLink}
              lineHeight={PropsForm.lineHeightLink}
              href={PropsForm.hrefLink}
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="form__login__button">
          <Button
            type={"submit"}
            backgroundHover={PropsForm.backgroundHover}
            size={PropsForm.sizeButton}
            text={PropsForm.textButton}
            color={PropsForm.colorButton}
            fontSize={PropsForm.fontSizeButton}
            cursor={PropsForm.cursorButton}
            background={PropsForm.backgroundButton}
            borderRadius={PropsForm.borderRadiusButton}
            border={PropsForm.borderButton}
          />
        </div>
        <div className="form__login__signup">
          <OrSignUp
            LoginEm={PropsForm.LoginEm}
            LoginFb={PropsForm.LoginFb}
            LoginGg={PropsForm.LoginGg}
            IconEm={PropsForm.IconEm}
            IconFb={PropsForm.IconFb}
            IconGg={PropsForm.IconGg}
          />
        </div>
        <div className="form__login__sign_up">
          <Text
            fontFamily={PropsForm.fontFamilyText}
            fontSize={PropsForm.fontSizeText}
            color={PropsForm.colorText}
            fontWeight={PropsForm.fontWeight}
            padding={PropsForm.paddingText}
          >
            Or Sign Up Using
          </Text>
          <Link
            color={PropsForm.colorLink}
            fontFamily={PropsForm.fontFamilyLink}
            fontSize={PropsForm.fontSizeLink}
            fontWeight={PropsForm.fontWeight}
            lineHeight={PropsForm.lineHeightLink}
            href={PropsForm.hrefLink}
          >
            SIGN IN
          </Link>
        </div>
      </form>
    </>
  );
};
export default FormLogin;
