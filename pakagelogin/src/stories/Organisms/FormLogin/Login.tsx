import React from "react";
import Button from "../../Atoms/Button/Button";
import { LockIcon } from "../../Atoms/Icon/IconLock";
import { UserIcon } from "../../Atoms/Icon/IconUser";
import Link from "../../Atoms/Link/Link";
import Text from "../../Atoms/Text/Text";
import Title from "../../Atoms/Title/Title";
import FormItem from "../../Molecules/FormItem/FormItem";
import OrSignUp from "../../Molecules/OrSignUp/OrSignUp";
import "./formlogin.scss";
import "../../assets/fontFace.css"
const FormLogin = () => {
  return (
    <>
      <form className="form__login">
        <Title
          padding="0 0 49px"
          text="Login"
          color="#333333"
          fontSize="39px"
          fontFamily="Poppins-Bold"
          fontWeight="bold"
          textAlign="center"
        />
        <div className="form__login__control form__login__username">
          <FormItem
            border="none"
            color="#333"
            fontFamily="Poppins-Regular"
            fontSize="16px"
            height="55px"
            width="349px"
            outline="none"
            paddingLabel="0 0 0 7px"
            padding="0 7px 0 34px"
            placeholder="Type in username"
            textLabel="Username"
            icon={<UserIcon />}
            type="text"
          />
        </div>
        <div className="form__login__control form__login__password">
          <FormItem
            textLabel="Password"
            border="none"
            color="#333"
            fontFamily="Poppins-Regular"
            fontSize="16px"
            height="55px"
            width="349px"
            outline="none"
            padding="0 7px 0 34px"
            placeholder="Type in password"
            icon={<LockIcon />}
            type="password"
          />
          <div className="form__login__password__forgot">
            <Link
              color="#666"
              fontFamily="Poppins-Regular"
              fontSize="14px"
              lineHeight="1.7"
            >
              Forgot password?{" "}
            </Link>
          </div>
        </div>
        <div className="form__login__button">
          <Button
            size="large"
            text="LOGIN"
            color="#fff"
            fontSize="16px"
            cursor="pointer"
            background={` linear-gradient(
        to right,
        rgba(0, 219, 222, 1) 0%,
        rgba(252, 0, 255, 1) 100%,
        rgba(252, 0, 255, 1) 100%
    )`}
            borderRadius="50px"
            border="none"
          />
        </div>
        <div className="form__login__signup">
          <OrSignUp />
        </div>
        <div className="form__login__sign_up">
          <Text
            fontFamily="Poppins-Regular"
            fontSize="14px"
            color="#666"
            padding="0 0 17px"
          >
            {" "}
            Or Sign Up Using
          </Text>
          <Link
            color="#666"
            fontFamily="Poppins-Regular"
            fontSize="14px"
            lineHeight="1.7"
          >
            SIGN UP
          </Link>
        </div>
      </form>
    </>
  );
};
export default FormLogin;
