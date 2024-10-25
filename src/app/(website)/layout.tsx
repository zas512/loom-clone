import { ReactNode } from "react";
import LandingPageNavbar from "./_components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col px-10 py-10 xl:px-0 container">
      <LandingPageNavbar />
      {children}
    </div>
  );
};

export default Layout;
