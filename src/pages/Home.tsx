//wallpaper
//import wallpaper from "../assets/wp.jpg";
//import wallpaper from "../assets/wallpaper.jpg";
//data
import { hairStylists } from "../assets/data/hairStylists";
import HairStylistCard from "../components/HairStylistCard";
//rrd
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gray-700">
        <h1 className="text-center text-white pt-2">Reserva tu espacio:</h1>
        <div className="container p-4 grid grid-cols-1 gap-5 place-items-center">
          {hairStylists.map((hs) => (
            <Link to="/" key={hs.id}>
              <HairStylistCard hairStylist={hs}></HairStylistCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
