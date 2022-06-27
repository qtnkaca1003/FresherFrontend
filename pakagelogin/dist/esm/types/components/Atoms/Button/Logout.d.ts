/// <reference types="react" />
interface ILogoutGG {
    clientId: string;
    buttonText: string;
    onLogoutSuccess: any;
}
declare const LogoutGG: (PropLogout: ILogoutGG) => JSX.Element;
export default LogoutGG;
