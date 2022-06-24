import React, { ReactNode } from "react";
import Text from "../../Atoms/Text/text";
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
const OrSignUp = (PropsOrSign: IOrSignUp) => {
  return (
    <>
      <div className="wapper__orsignup">
        <div className="wapper__orsignup__text">
          <Text
            fontFamily={"Poppins-Regular"}
            fontSize={PropsOrSign.fontSizeText}
            color={PropsOrSign.colorText}
          >
            Or Sign Up
          </Text>
        </div>
        <div className="wapper__orsignup__icon">
          <p
            className="wapper__orsignup__icon__fb"
            onClick={PropsOrSign.LoginFb}
          >
            {PropsOrSign.IconFb}
          </p>
          <p
            className="wapper__orsignup__icon__gg"
            onClick={PropsOrSign.LoginGg}
          >
            {PropsOrSign.IconGg}
          </p>
          <p
            className="wapper__orsignup__icon__email"
            onClick={PropsOrSign.LoginEm}
          >
            {PropsOrSign.IconEm}
          </p>
        </div>
      </div>
    </>
  );
};
export default OrSignUp;
