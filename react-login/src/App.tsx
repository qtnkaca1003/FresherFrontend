import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./hook";
import Dasboard from "./pages/dashboard/dashboard";
import ForgotPass from "./pages/forgotpassword/forgotpass";
import LoginPage from "./pages/login/login";

function App() {
  const userFB = useAppSelector((state) => state.addToken.userFb);
  if (userFB.token === "") {
    return <LoginPage />;
  } else if (userFB.token !== "") {
    return <Dasboard />;
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dasboard />
          </Route>
          <Route  path="/">
            <LoginPage />
          </Route>
          <Route  path="/forgotpassword">
          <ForgotPass />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}
export default App;
