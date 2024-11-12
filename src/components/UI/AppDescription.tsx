import user from "../../assets/png/user1.png";
import house from "../../assets/png/house1.png";
import schedule from "../../assets/png/schedule1.png";

const AppDescription = () => {
  return (
    <>
      <div className="flex text-xs bg-color3 px-2 py-4 items-center justify-center gap-1">
        <div className="flex flex-col flex-1 border-l-4 border-color1 p-1 justify-center items-center">
          <img src={user} alt="user" className="w-10 pb-3" />
          <p className="ml-1">Encuentra un barbero que vaya con tu estilo.</p>
        </div>
        <div className="flex flex-col flex-1 border-l-4 border-color1 p-1 justify-center items-center">
          <img src={house} alt="house" className="w-10 pb-3" />
          <p className="ml-1">Encuentra barberías cercanas a tu ubicación.</p>
        </div>
        <div className="flex flex-col flex-1 border-l-4 border-color1 p-1 justify-center items-center">
          <img src={schedule} alt="schedule" className="w-10 pb-3" />
          <p className="ml-1">Agenda una cita para tu próximo corte.</p>
        </div>
      </div>
    </>
  );
};

export default AppDescription;
