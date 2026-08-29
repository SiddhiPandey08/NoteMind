import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="flex overflow-hidden h-screen">{children}</main>;
};

export default Layout;
