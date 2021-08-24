import React, { useEffect, useState } from "react";
import Weather from "./Weather";

function Temp() {
  const [weather, setWeather] = useState("");
  const [nWeather, setnWeather] = useState({});
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=31a53f0aa82c808b1a2263851d90f3dc`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setnWeather(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            placeholder="search...."
            autoFocus
            id="search"
            className="searchTerm"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getWeather}>
            Search
          </button>
        </div>
      </div>
      <Weather nWeather={nWeather} />
    </>
  );
}

export default Temp;
