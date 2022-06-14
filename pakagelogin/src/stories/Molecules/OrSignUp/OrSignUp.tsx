import React, { ReactNode } from "react";
import Text from "../../Atoms/Text/Text";
import "./orsignup.scss";
interface IOrSignUp {
  text?: string;
  iconGg?: ReactNode;
  iconFb?: ReactNode;
  iconMail?: ReactNode;
}
const OrSignUp = (PropsOrSignUp: IOrSignUp) => {
  return (
    <>
      <div className="wapper__orsignup">
        <div className="wapper__orsignup__text">
          <Text fontFamily="Poppins-Regular" fontSize="14px" color="#666">
            {PropsOrSignUp.text}
          </Text>
        </div>
        <div className="wapper__orsignup__icon">
          <p className="wapper__orsignup__icon__fb">{PropsOrSignUp.iconFb}</p>
          <p className="wapper__orsignup__icon__gg">{PropsOrSignUp.iconGg}</p>
          <p className="wapper__orsignup__icon__email">
            {PropsOrSignUp.iconMail}
          </p>
        </div>
      </div>
    </>
  );
};
export default OrSignUp;
