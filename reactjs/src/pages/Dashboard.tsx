/* eslint-disable prettier/prettier */
import { LogoutGG } from "pakagelogin-nhanqt"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "redux/store"
import { deleteUser, UserState } from "redux/userSlice"

const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  const onLogoutSuccess = () => {
    navigate("/login")
    const log: UserState = {
      accessToken: "",
      picture: "",
      name: "",
      email: "",
    }
    dispatch(deleteUser(log))
  }

  return (
    <>
      <main>
        <div className="wapper__dashboard">
          <div className="wapper__dashboard__card">
            <h1 className="title">User Profile</h1>
            <div className="wapper__dashboard__card__image">
              {user?.picture !== undefined && user?.picture ? (
                <img
                  src={user?.picture}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="wapper__dashboard__card__name">
              <h2>Name: {user?.name}</h2>
            </div>
            <div className="wapper__dashboard__card__email">
              <h3>Email: {user?.email}</h3>
            </div>
            <div className="wapper__dashboard__card__button">
              {user.note === "fb" ? (
                <button onClick={onLogoutSuccess} className="btn_logout">
                  Log out
                </button>
              ) : user.note === "gg" ? (
                <LogoutGG
                  buttonText="LogOut"
                  onLogoutSuccess={onLogoutSuccess}
                  clientId="887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
                />
              ) : (
                <button onClick={onLogoutSuccess} className="btn_logout">
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
