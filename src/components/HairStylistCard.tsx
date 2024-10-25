//interfaces
import { HairStylist } from "../interfaces/HairStylist";

const HairStylistCard = ({ hairStylist }: { hairStylist: HairStylist }) => {
  return (
    <div className="bg-black rounded-md shadow-lg w-64">
      <img
        src={`src/assets/hs_images/${hairStylist.image}`}
        className="w-full h-36 object-cover border-2 border-black rounded-md"
      />
      <div>
        <h2 className="text-white text-sm text-center p-2">
          {hairStylist.name}
        </h2>
        <p className="text-white text-xs text-center px-2 pb-2">
          {hairStylist.description}
        </p>
      </div>
    </div>
  );
};

export default HairStylistCard;
