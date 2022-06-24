import React, { ReactNode } from "react";
import { EmailIcon } from "../../Atoms/Icon/IconEmail";
import { GgIcon } from "../../Atoms/Icon/IconGg";
import Text from "../../Atoms/Text/Text";
import "./orsignup.scss";
interface IOrSignUp {
  fontSizeText?: string;
  colorText?: string;
  LoginFb?: any;
  butonLoginGg?: any;
  butonLoginEm?: any;
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
          <p className="wapper__orsignup__icon__fb" onClick={PropsOrSign.LoginFb} >{PropsOrSign.LoginFb}</p>
          <p className="wapper__orsignup__icon__gg" onClick={PropsOrSign.LoginFb}>
            {PropsOrSign.butonLoginGg}
          </p>
          <p className="wapper__orsignup__icon__email" onClick={PropsOrSign.LoginFb}>
            {PropsOrSign.butonLoginEm}
          </p>
        </div>
      </div>
    </>
  );
};
export default OrSignUp;
