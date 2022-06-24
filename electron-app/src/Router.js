import React from "react";
import {  Route, Routes } from "react-router-dom";
import Image from "./image";
import View from "./view";
import Setting from "./setting"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<View />} />
      <Route path="/image" element={<Image />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default Router;
