import { useAppDispatch, useAppSelector } from "../../hook";
import { logOutFB } from "../../redux/slices/loginSlices";
import { IUserFb } from "../../tpye";
import "./dashboard.scss";
import { useGoogleLogout } from "react-google-login";
import { auth } from "../../client";
import avatar from "../../assets/imgs/avatar.png"
const Dasboard = () => {
  const clientId =
    "887683151777-vt4ba252u7sqbah02veebpl32dpu5nab.apps.googleusercontent.com";
  const user = useAppSelector((state) => state.addToken.userFb);
  const dispatch = useAppDispatch();
  const onLogoutSuccess = () => {
    const log: IUserFb = {
      token: "",
      avatar: "",
      name: "",
      userID: "",
      email: "",
      note: "",
    };
    auth()
      .signOut()
      .then(() => {
        dispatch(logOutFB(log));
      });
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });
  /* if (user.token === "") {
    return <LoginPage />;
  } else if (user.token !== "") {
    return <Dasboard />;
  } */
  return (
    <>
      <main>
        
        <div  className="wapper__dashboard">
          <div className="wapper__dashboard__card">
            <h1 className="title">User Profile</h1>
            <div className="wapper__dashboard__card__image">
              {user.avatar === "" ? (
                <img src={avatar} alt="avatar" />
              ) : (
                <img src={user.avatar} alt="avatar" />
              )}
            </div>
            <div className="wapper__dashboard__card__name">
              <h2>Name: {user.name}</h2>
            </div>
            <div className="wapper__dashboard__card__id">
              <h3>User ID: {user.userID}</h3>
            </div>
            <div className="wapper__dashboard__card__email">
              <h3>Email: {user.email}</h3>
            </div>
            <div className="wapper__dashboard__card__note">
              <p>Note: {user.note}</p>
            </div>
            <div className="wapper__dashboard__card__button">
              <button onClick={signOut} className="btn_logout">
                Log out
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dasboard;
