import React from "react";
import Header from "./Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="w-3/4 mx-auto">{children}</div>
    </>
  );
};
export default Layout;
