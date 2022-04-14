import React, { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const App:FC = () => {
  return (
   
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;