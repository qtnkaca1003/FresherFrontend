import { gapi } from "gapi-script";
import { PageIndex } from "pakagelogin-nhanqt";
import { useEffect, useState } from "react";
import { useGoogleLogin } from "react-google-login";
import { auth, provider } from "../../client";
import { useAppDispatch } from "../../hook";
import { logInFb } from "../../redux/slices/loginSlices";
import { IUserFb } from "../../tpye";
import "./login.scss";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const acc: IUserFb = {
      token: userName,
      name: userName,
      avatar:"",
      email: userName + "@gmail.com",
      userID: userName + "userID",
      note: "Đăng nhập bằng tài khoảng!",
    };
    dispatch(logInFb(acc));
  };
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const clientId =
    "887683151777-vt4ba252u7sqbah02veebpl32dpu5nab.apps.googleusercontent.com";
  const login = () => {
    auth()
      .signInWithPopup(provider)
      .then((res: any) => {
        const data: IUserFb = {
          name: res.additionalUserInfo.profile.name,
          email: res.additionalUserInfo.profile.email,
          avatar: res.additionalUserInfo.profile.picture.data.url,
          token: res.credential.accessToken,
          userID: res.additionalUserInfo.profile.id,
          note: "Đăng nhập bằng facebook!",
        };
        dispatch(logInFb(data));
      });
  };
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  const onSuccess = (res: any) => {
    const data: IUserFb = {
      email: res.profileObj.email,
      avatar: res.profileObj.imageUrl,
      name: res.profileObj.name,
      token: res.profileObj.googleId,
      userID: res.profileObj.googleId,
      note: "Đăng nhập bằng google!",
    };
    dispatch(logInFb(data));
  };
  const onFailure = (res: any) => {
  };
  //gg
  const { signIn } = useGoogleLogin({
    clientId,
    onSuccess,
    onFailure,
    isSignedIn: true,
  });

  return (
    <>
      <PageIndex
        onChangePassword={changePassword}
        onChangeUserName={changeUsername}
        onSubmit={onClickLogin}
        paddingTitle="0px 0 49px"
        LoginFb={login}
        LoginGg={signIn}
        sizeButton="large"
        textButton="LOGIN"
        typeButton="button"
      />
    </>
  );
};

export default LoginPage;
