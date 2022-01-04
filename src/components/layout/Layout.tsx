import React from "react";
import Header from "./Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
    </>
  );
};
export default Layout;
