"use client";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/uz-latn";
import updateLocale from "dayjs/plugin/updateLocale";
import { Cloud, Thermometer } from "../../assets/icons";
import type { WeatherResponse } from "../../types/weatherResponse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

dayjs.updateLocale("uz-latn", {
  months: [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ],
  monthsShort: [
    "Yan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Iyn",
    "Iyl",
    "Avg",
    "Sen",
    "Okt",
    "Noy",
    "Dek",
  ],
  weekdays: [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ],
  weekdaysShort: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
});

dayjs.locale("uz-latn");

export type WeatherCardProps = {
  weather: WeatherResponse;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const CardData = () => {
    const data: WeatherResponse = { ...weather, list: [] };
    const addedDates = new Set<string>();

    weather?.list.forEach((e) => {
      const date = e.dt_txt.split(" ")[0];

      if (!addedDates.has(date)) {
        if (e.dt_txt.includes("12:00:00") || data.list.length === 0) {
          data.list.push(e);
          addedDates.add(date);
        }
      }
    });

    return data;
  };

  const data = CardData();

  return (
    <div className="w-full flex justify-center">
      <Swiper
        slidesPerView={1.7}
        className="flex! justify-center"
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data.list.map((e, index) => {
          const forecastDate = dayjs(e.dt_txt);
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="flex flex-col w-[800px] max-w-[90%] rounded-3xl p-7 gap-10"
                style={{
                  background: "linear-gradient(135deg, #c209f0, #211825)",
                }}
              >
                <h1 className="text-4xl text-white font-light">
                  {weather.city.name}
                </h1>
                <div className="w-full flex items-center justify-center gap-5">
                  <Thermometer />
                  <h1 className="text-6xl text-white font-light">
                    {e.main.temp}
                  </h1>
                  <Cloud />
                </div>
                <div className="text-white underline">
                  <p>{forecastDate.format("D-MMMM, ddd")}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md">
                    <p className="text-sm text-gray-300">Namlik</p>
                    <p className="text-lg font-semibold text-white">
                      {e.main.humidity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md">
                    <p className="text-sm text-gray-300">Ko'rinish masofasi</p>
                    <p className="text-lg font-semibold text-white">
                      {e.visibility}
                    </p>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md">
                    <p className="text-sm text-gray-300">Havo Bosimi</p>
                    <p className="text-lg font-semibold text-white">
                      {e.main.pressure}
                    </p>
                  </div>
                  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-md">
                    <p className="text-sm text-gray-300">Shamol</p>
                    <p className="text-lg font-semibold text-white">
                      {e.wind.speed}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WeatherCard;
