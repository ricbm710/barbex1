//rrd
import { Link } from "react-router-dom";
//logo
import logo from "../../assets/logo_alt.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex bg-color1">
          <div className="p-2">
            <Link to="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div>
              <Link to="/" className="black mx-2">
                Barberos
              </Link>
              <Link to="/" className="black mx-2">
                Barberias
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
