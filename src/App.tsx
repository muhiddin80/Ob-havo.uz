import { useState } from "react";
import Search from "./components/SearchInput/search";
import WeatherCard from "./components/weatherCard/weatherCard";
import { useGetWeather } from "./hook/weather";
import SmallCards from "./components/SmallCards/smallCards";

function App() {
  const [city, setCity] = useState("Bukhara");
  const { data, isLoading } = useGetWeather(city);

  const handleSearch = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full h-full gap-6">
      <Search onSearch={handleSearch} />

      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!isLoading && data ? (
        <>
          <WeatherCard weather={data} />
          <SmallCards weather={data} />
        </>
      ) : (
        !isLoading && (
          <p className="text-center mt-10 text-red-500">
            Weather data not found.
          </p>
        )
      )}
    </div>
  );
}

export default App;
