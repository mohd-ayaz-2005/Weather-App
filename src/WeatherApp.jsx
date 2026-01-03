import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 26.83,
    humidity: 9,
    temp: 28.29,
    tempMax: 28.29,
    tempMin: 28.29,
    weather: "Clear sky",
  });

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
