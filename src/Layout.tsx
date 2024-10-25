//rrd
import { Outlet } from "react-router-dom";
//components
import Navbar from "./components/UI/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
