import React from "react";
import { EmailIcon } from "../../Atoms/Icon/IconEmail";
import { FbIcon } from "../../Atoms/Icon/IconFb";
import { GgIcon } from "../../Atoms/Icon/IconGg";
import Text from "../../Atoms/Text/text";
import "./orsignup.scss";
const OrSignUp = () => {
  return (
    <>
      <div className="wapper__orsignup">
        <div className="wapper__orsignup__text">
      
          <Text fontFamily="Poppins-Regular" fontSize="14px" color="#666" > Or Sign Up</Text>
        </div>

        <div className="wapper__orsignup__icon">
          <p className="wapper__orsignup__icon__fb">
            <FbIcon />
          </p>
          <p className="wapper__orsignup__icon__gg">
            <GgIcon />
          </p>
          <p className="wapper__orsignup__icon__email">
            <EmailIcon />
          </p>
        </div>
      </div>
    </>
  );
};
export default OrSignUp;
