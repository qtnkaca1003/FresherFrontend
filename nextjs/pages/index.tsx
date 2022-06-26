/* eslint-disable prettier/prettier */
import { useAppDispatch, useAppSelector } from "hooks/useRedux"
import { useRouter } from "next/router"
import { PageIndex } from "pakagelogin-nhanqt"
import { useEffect, useState } from "react"
import { setUser, UserState } from "redux/userSlice"

const Login = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const router = useRouter()
  const [userName, setUserName] = useState<string>("")
  const [, /* password */ setPassword] = useState<string>("")
  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const acc: UserState = {
      accessToken: userName,
      name: userName,
      email: "@gmail.com",
    }
    dispatch(setUser(acc))
    router.push("/dashboard/dashboard")
  }
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const responseFacebook = (response: any) => {
    const addUser: UserState = {
      name: response?.name,
      accessToken: response.accessToken,
      email: response.email,
      picture: response.picture.data.url,
    }
    dispatch(setUser(addUser))
    router.push("/dashboard/dashboard")
  }
  const onSuccess = (res: any) => {}
  const onFailure = (res: any) => {}

  return (
    <PageIndex
      onSuccess={onSuccess}
      onFailure={onFailure}
      callback={responseFacebook}
      onChangePassword={changePassword}
      onSubmit={onClickLogin}
      onChangeUserName={changeUsername}
      appId="575100697553277"
      clientId="887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
      paddingTitle="0 0 49px"
      /* onSubmit={onClickLogin}
        onChangePassword={changePassword}
        onChangeUserName={changeUsername} */
      /*  LoginFb={signIn}
        LoginGg={signIn} */
      sizeButton="large"
      textButton="LOGIN"
      typeButton="button"
    />
  )
}

export default Login
