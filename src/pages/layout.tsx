import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/mobile/MobileHeader";

const Layout = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <Header />
      </div>

      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
