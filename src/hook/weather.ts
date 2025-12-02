import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export const useGetWeather = (city: string) => {
  return useQuery({
    queryFn: () => getWeather(city),
    queryKey: ["weather", city],
    enabled: !!city,
  });
};
