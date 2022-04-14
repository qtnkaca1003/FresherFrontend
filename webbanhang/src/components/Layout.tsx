import React, { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Ichildren {
  children?: React.ReactNode;
}
const Layout: FC<Ichildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
