import React, { ReactNode, useEffect } from "react";
import Text from "../../Atoms/Text/text";
// @ts-ignore
import { gapi } from "gapi-script";
// @ts-ignore
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FbIcon } from "../../Atoms/Icon/IconFb";
import { GgIcon } from "../../Atoms/Icon/IconGg";
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
  //login fb
  appId?: string;
  onClickFb?: any;
  callback?: any;
  //logingg
  clientId: string;
  onSuccess?: any;
  onFailure?: any;
}
const OrSignUp = (PropsOrSign: IOrSignUp) => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: `${PropsOrSign.clientId}`,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  return (
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
        <p className="wapper__orsignup__icon__fb">
          <FacebookLogin
            appId={PropsOrSign.appId}
            autoLoad={true}
            fields="name,email,picture"
            onClick={PropsOrSign.onClickFb}
            callback={PropsOrSign.callback}
            icon={<FbIcon />}
            cssClass="iconFb"
          />
        </p>
        <p className="wapper__orsignup__icon__gg">
          <GoogleLogin
            clientId={PropsOrSign.clientId}
            onSuccess={PropsOrSign.onSuccess}
            onFailure={PropsOrSign.onFailure}
            isSignedIn={true}
          />
          <div className="icon">
            <GgIcon />
          </div>
        </p>
        <p
          className="wapper__orsignup__icon__email"
          onClick={PropsOrSign.LoginEm}
        >
          {PropsOrSign.IconEm}
        </p>
      </div>
    </div>
  );
};
export default OrSignUp;
