import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "bcbb18ed13928360b80a7c40ff2d7947";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric `
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: city,
      feelsLike: jsonResponse.main.feels_like,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_max,
      tempMax: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let info = await getWeatherInfo();
    updateInfo(info);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit" size="large">
          Send
        </Button>
      </form>
      <br />
    </div>
  );
}

export default SearchBox;
