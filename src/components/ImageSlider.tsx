//swiper
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
//utils
import { basePath } from "../utils/basePath";
//css
import "../assets/styles/image-slider.css";

const ImageSlider = () => {
  //dummy function
  const number1 = Math.floor(Math.random() * 15) + 1;
  const number2 = Math.floor(Math.random() * 15) + 1;
  const number3 = Math.floor(Math.random() * 15) + 1;

  return (
    <div className="w-1/2 mx-auto flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={`${basePath}cut/cut${number1}.jpg`}
            alt="demostracion"
            className="rounded-lg shadow-lg object-cover border-gray-600 border"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${basePath}cut/cut${number2}.jpg`}
            alt="demostracion"
            className="rounded-lg shadow-lg object-cover border-gray-600 border"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${basePath}cut/cut${number3}.jpg`}
            alt="demostracion"
            className="rounded-lg shadow-lg object-cover border-gray-600 border"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
