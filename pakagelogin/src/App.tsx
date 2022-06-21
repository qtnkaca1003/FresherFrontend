import React, { useState } from "react";
import "./App.scss";
import PageIndex from "./components/Page/Login";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClick = (e: React.FormEvent) => {
    e.preventDefault();
    const acc = {
      user: userName,
      pass: password,
    };
  };
  };
  return (
    <>
      <PageIndex
        typeButton="button"
        textButton="LOGIN"
        sizeButton="large"
      />
    </>
  );
}

export default App;
