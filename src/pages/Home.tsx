//data
import { hairStylists } from "../assets/data/hairStylists";
//rrd
import { Link } from "react-router-dom";
//components
import HairStylistCard from "../components/HairStylistCard";
//hooks
import { useState } from "react";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
//css
import "../assets/styles/pagination-arrows.css";

const Home = () => {
  //pagination
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = hairStylists.slice(startIndex, endIndex);

  const totalPages = Math.ceil(hairStylists.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="bg-black">
        <h1 className="text-center text-gray-200 pt-4 text-sm">
          Conoce a nuestros profesionales:
        </h1>
        <div className="container p-4 grid grid-cols-1 gap-5 place-items-center">
          {currentItems.map((hs) => (
            <Link to="/" key={hs.id}>
              <HairStylistCard hairStylist={hs}></HairStylistCard>
            </Link>
          ))}
        </div>
        <div className="flex justify-around p-4 items-center">
          <button
            className={`p-1 border border-gray-600 rounded-md text-lg text-gray-200 ${
              currentPage === 1
                ? "cursor-not-allowed" // Disabled styles
                : "cursor-default bg-color2" // Enabled styles
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faBackward} className="pagination-arrow" />
          </button>
          <p className="text-gray-200 text-xs">{`Página ${currentPage} de ${totalPages}`}</p>
          <button
            className={`p-1 border border-gray-600 rounded-md text-lg text-gray-200 ${
              currentPage === totalPages
                ? "cursor-not-allowed" // Disabled styles
                : "cursor-default bg-color2" // Enabled styles
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faForward} className="pagination-arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
