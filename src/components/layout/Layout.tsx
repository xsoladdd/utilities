import React from "react";
import Header from "./Header/Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="w-3/4 mx-auto">{children}</div>
    </>
  );
};
export default Layout;
