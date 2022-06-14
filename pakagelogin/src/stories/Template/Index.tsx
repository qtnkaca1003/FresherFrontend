import React from "react";
import FormLogin from "../Organisms/FormLogin/Login";
import "./style.scss";
const Login = () => {
  return (
    <div className="page_login">
      <div className="container">
        <div className="wapper__login">
          <div className="wapper__login__form">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
