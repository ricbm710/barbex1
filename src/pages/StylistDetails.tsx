//hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//interfaces
import { HairStylist } from "../interfaces/HairStylist";
//data
import { hairStylists } from "../assets/data/hairStylists";
//utils
import { basePath } from "../utils/basePath";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//components
import ImageSlider from "../components/ImageSlider";

const StylistDetails = () => {
  const { id } = useParams<string>();
  const [selectedStylist, setSelectedStylist] = useState<HairStylist | null>(
    null
  );

  useEffect(() => {
    const foundStylist = hairStylists.find((hs) => hs.id === Number(id));
    setSelectedStylist(foundStylist || null);
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black p-4">
        <h1 className="text-center text-gray-200 mb-2">
          {selectedStylist?.name}
        </h1>
        <div className="flex flex-col p-2 bg-color2 rounded-md shadow-lg border border-gray-600">
          <div className="flex gap-2">
            <img
              src={`${basePath}hs_images/${selectedStylist?.image}`}
              alt="barbero"
              className="w-full h-36 object-cover border-2 border-black rounded-xl"
            />
            <div className="flex flex-col w-36 gap-2 justify-evenly">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faWhatsapp} className="text-color3" />
                <p className="text-gray-200 text-xs">
                  {selectedStylist?.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-color3" />
                <p className="text-gray-200 text-xs">
                  {selectedStylist?.address}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-2 px-4">
            <p className="text-xs text-gray-200 text-justify">
              {selectedStylist?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 flex flex-col">
        <h1 className="text-center mb-2 text-gray-200">Mis Trabajos</h1>
        <ImageSlider />
      </div>
    </>
  );
};

export default StylistDetails;
