import Loading from "components/Loading"
import Menu from "components/Menu"
import Login from "pages/LoginPage"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAppSize } from "redux/appSlice"
import { RootState } from "redux/store"
import AppRoute from "./routes"

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--app-height", "100vh")
      setTimeout(() => {
        doc.style.setProperty("--app-height", `${window.innerHeight}px`)
        dispatch(
          setAppSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        )
        // Delay for get correct height screen
      }, 300)
    }
    appHeight()
    const disableZoomTouch = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault()
        event.stopPropagation()
      }
    }
    window.addEventListener("resize", appHeight)
    window.addEventListener("touchstart", disableZoomTouch, { passive: false })

    return () => {
      window.removeEventListener("resize", appHeight)
      window.removeEventListener("touchstart", disableZoomTouch)
    }
  }, [dispatch])
  if (user.accessToken === "") {
    return <Login />
  }

  return (
    <>
      <AppRoute />
      <Menu />
      <Loading />
    </>
  )
}

export default App
