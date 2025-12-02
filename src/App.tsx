import WeatherCard from "./components/weatherCard/weatherCard";
import { useGetWeather } from "./hook/weather";

function App() {
  const { data, isLoading } = useGetWeather("Bukhara");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <p className="text-center mt-10 text-red-500">Weather data not found.</p>
    );
  }

  return (
    <div className="flex mt-10 w-full items-center justify-center">
      <WeatherCard weather={data} />
    </div>
  );
}

export default App;
