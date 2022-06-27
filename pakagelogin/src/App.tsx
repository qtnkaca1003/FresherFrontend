import React from "react";
import "./App.scss";
import LogoutGG from "./components/Atoms/Button/Logout";
import PageIndex from "./components/Page/Login";

function App() {
  const responseFacebook = (response: any) => {
    console.log(response);
  };
  const onSuccess = (res: any) => {
    console.log(res);
  };
  const onFailure = (res: any) => {
    console.log("error", res);
  };
  const onClick = (e: React.FormEvent) => {
    console.log(e);
  };
  const logout = () => {
    console.log("Log out");
  };
  return (
    <>
      <PageIndex
        typeButton="button"
        textButton="LOGIN"
        sizeButton="large"
        appId="575100697553277"
        callback={responseFacebook}
        clientId={
          "887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
        }
        onSubmit={onClick}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <LogoutGG
        buttonText="Log Out"
        clientId="887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
        onLogoutSuccess={logout}
      />
    </>
  );
}

export default App;
