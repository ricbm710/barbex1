//rrd
import { Outlet } from "react-router-dom";
//components
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
