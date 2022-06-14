import React from "react";
import FormLogin from "../Organisms/FormLogin/login";
import "./style.scss"
const Login = () => {
  return (
    <div className="wapper__login">
      <div className="wapper__login__form">
        <FormLogin />
      </div>
    </div>
  );
};
export default Login;
