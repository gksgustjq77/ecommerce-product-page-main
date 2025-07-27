import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";

const Layout = () => {
  return (
    <>
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <Header />
      </div>

      <main className="min-h-screen w-full flex-1">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
