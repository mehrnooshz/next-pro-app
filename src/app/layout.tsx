import React from "react";
import "../styles/globals.css";
interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
