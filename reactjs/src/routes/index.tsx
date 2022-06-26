import React from "react"
import { Route, Routes } from "react-router-dom"
import { routePath } from "./path"

const HomePage = React.lazy(() => import("pages/HomePage"))
const AboutPage = React.lazy(() => import("pages/AboutPage"))
const ContactPage = React.lazy(() => import("pages/ContactPage"))
const Dashboard = React.lazy(() => import("pages/Dashboard"))
const Login = React.lazy(() => import("pages/LoginPage"))
function AppRoute() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path={routePath.Home} element={<HomePage />} />
        <Route path={routePath.About} element={<AboutPage />} />
        <Route path={routePath.Contact} element={<ContactPage />} />
        <Route path={routePath.Login} element={<Login />} />
        <Route path={routePath.Dashboard} element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  )
}

export default AppRoute
