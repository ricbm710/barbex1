//rrd
import { Link } from "react-router-dom";
//logo
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex">
          <div className="m-2">
            <Link to="/">
              <img src={logo} alt="logo" className="w-24 sm:w-28" />
            </Link>
          </div>
          <div className="bg-black w-full flex items-center justify-between">
            <div>
              <Link to="/" className="text-gray-200 mx-2 sm:mx-4 sm:text-xl">
                Barberos
              </Link>
              <Link to="/" className="text-gray-200 mx-2 sm:mx-4 sm:text-xl">
                Barberias
              </Link>
            </div>
            <div>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-32 ms-auto me-2 text-sm sm:w-64 sm:me-8 sm:text-lg border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
