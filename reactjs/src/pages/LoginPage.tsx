/* eslint-disable prettier/prettier */
import { PageIndex } from "pakagelogin-nhanqt"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser, UserState } from "redux/userSlice"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userName, setUserName] = useState<string>("")
  const [, /* password */ setPassword] = useState<string>("")
  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const acc: UserState = {
      accessToken: userName,
      name: userName,
      email: userName + "@gmail.com",
      note: "user",
    }
    dispatch(setUser(acc))
    navigate("/dashboard")
  }
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const responseFacebook = (response: any) => {
    const data: UserState = {
      name: response?.name,
      accessToken: response.accessToken,
      email: response.email,
      picture: response.picture.data.url,
      note: "fb",
    }
    dispatch(setUser(data))
    navigate("/dashboard")
  }
  const onSuccess = (res: any) => {
    const data: UserState = {
      name: res?.profileObj.name,
      accessToken: res.accessToken,
      email: res?.profileObj.email,
      picture: res?.profileObj.imageUrl,
      note: "gg",
    }
    dispatch(setUser(data))
    navigate("/dashboard")
  }
  const onFailure = (res: any) => {}

  return (
    <PageIndex
      onChangePassword={changePassword}
      onChangeUserName={changeUsername}
      onSubmit={onClickLogin}
      typeButton="button"
      textButton="Login"
      appId="575100697553277"
      callback={responseFacebook}
      clientId="887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
      onFailure={onFailure}
      onSuccess={onSuccess}
    />
  )
}

export default Login
