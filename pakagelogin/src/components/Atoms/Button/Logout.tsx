import React from "react";
import { GoogleLogout } from "react-google-login";
interface ILogoutGG {
  clientId: string;
  buttonText: string;
  onLogoutSuccess: any;
}
const LogoutGG = (PropLogout: ILogoutGG) => {
  return (
    <GoogleLogout
      clientId={PropLogout.clientId}
      buttonText={PropLogout.buttonText}
      onLogoutSuccess={PropLogout.onLogoutSuccess}
    />
  );
};
export default LogoutGG;
