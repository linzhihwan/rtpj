import NavBar from "./components/NavBar";

import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // 🔑 발급받은 키 입력

  const getWeather = async () => {
    if (!city.trim()) {
      alert("도시명을 입력하세요!");
      return;
    }
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`
      );
      setWeather(res.data);
    } catch (err) {
      alert("날씨 정보를 가져올 수 없습니다.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <NavBar /> 
      <h1>🌤 Weather App</h1>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="도시명을 입력하세요 (예: Seoul)"
      />
      <button onClick={getWeather}>검색</button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name} 날씨</h2>
          <p>🌡 온도: {weather.main.temp}°C</p>
          <p>💨 습도: {weather.main.humidity}%</p>
          <p>☁️ 상태: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
