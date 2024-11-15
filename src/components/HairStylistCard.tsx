//interfaces
import { HairStylist } from "../interfaces/HairStylist";
//utils
import { basePath } from "../utils/basePath";
//components
import Rating from "./Rating";

const HairStylistCard = ({ hairStylist }: { hairStylist: HairStylist }) => {
  return (
    <div className="bg-color2 rounded-md shadow-lg w-64 p-1 border border-gray-600">
      <img
        src={`${basePath}hs_images/${hairStylist.image_name}`}
        alt="barbero"
        className="w-full h-28 object-cover border-2 border-black rounded-xl"
      />
      <div>
        <h2 className="text-gray-200 text-xs text-center p-2">
          {hairStylist.name_hs}
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Rating rating={hairStylist.rating} />
        <span className="text-xs text-gray-200 ml-1">{`(${hairStylist.reviews})`}</span>
      </div>
    </div>
  );
};

export default HairStylistCard;
