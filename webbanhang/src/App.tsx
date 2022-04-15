import React, { FC } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Router from "./router";

const App:FC = () => {
  return (
   
    <Layout>
     <Router/>
    </Layout>
  );
};

export default App;