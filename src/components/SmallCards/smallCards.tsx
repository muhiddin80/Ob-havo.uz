"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { WeatherResponse } from "../../types/weatherResponse";
import { Sun } from "../../assets/icons";
import "swiper/css";

export type WeatherCardProps = {
  weather: WeatherResponse;
};

const SmallCards = ({ weather }: WeatherCardProps) => {
  const swiperData = () => {
    const data: WeatherResponse = { ...weather, list: [] };
    for (let i = 0; i < 7; i++) {
      data.list.push(weather.list[i]);
    }
    return data;
  };

  const data = swiperData();

  return (
    <div className="w-full flex justify-center mt-4">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={15}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        loop={true}
        modules={[Autoplay]}
      >
        {data.list.map((e, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[120px] h-[120px] rounded-2xl flex flex-col items-center justify-center gap-2 text-white text-sm font-light backdrop-blur-md shadow-lg text-center"
              style={{
                background: "linear-gradient(135deg, #c209f0, #211825)",
              }}
            >
              <p className="opacity-90 text-lg">
                {e.dt_txt.split(" ")[1].slice(0, 5)}
              </p>

              <div>
                <Sun height="40" width="40" />
              </div>

              <p className="text-lg font-semibold">
                {Math.round(e.main.temp)}° C
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallCards;
