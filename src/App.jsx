// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "248ae18d984f623c4b752e664091236f";
const CITY_NAME = "Daegu";
const LAT = 35.87;  // 대구 위도
const LON = 128.60; // 대구 경도

function getAQIInfo(aqi) {
  switch (aqi) {
    case 1:
      return { icon: "😃", message: "오늘은 공기질이 좋아요!" };
    case 2:
      return { icon: "🙂", message: "공기질이 보통이에요." };
    case 3:
      return { icon: "😷", message: "공기질이 나빠요! 마스크 착용을 권고합니다." };
    case 4:
      return { icon: "🤢", message: "매우 나쁜 공기질! 외출을 자제하세요." };
    case 5:
      return { icon: "☠️", message: "심각한 공기오염! 반드시 마스크 착용하세요." };
    default:
      return { icon: "❓", message: "공기질 정보를 알 수 없습니다." };
  }
}

export default function App() {
  const [weather, setWeather] = useState(null);
  const [tomorrowWeather, setTomorrowWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const weatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric&lang=kr`
    ).then(res => {
      if (!res.ok) throw new Error("현재 날씨 API 실패");
      return res.json();
    });

    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=metric&lang=kr`
    ).then(res => {
      if (!res.ok) throw new Error("예보 API 실패");
      return res.json();
    });

    const airFetch = fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LAT}&lon=${LON}&appid=${API_KEY}`
    ).then(res => {
      if (!res.ok) throw new Error("공기질 API 실패");
      return res.json();
    });

    Promise.all([weatherFetch, forecastFetch, airFetch])
      .then(([wData, fData, aData]) => {
        setWeather(wData);
        setAirPollution(aData);

        const today = new Date();
        const tm = new Date(today);
        tm.setDate(today.getDate() + 1);
        const dateStr = tm.toISOString().split("T")[0];
        const tNoon = fData.list.find(item =>
          item.dt_txt.startsWith(dateStr) && item.dt_txt.includes("12:00:00")
        );
        setTomorrowWeather(tNoon);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">에러: {error}</div>;

  const aqiInfo = getAQIInfo(airPollution.list[0].main.aqi);

  return (
    <div className="container">
      {/* 오늘 날씨 */}
      <section className="info-section">
        <h2>오늘 날씨에요!</h2>
        <div className="weather-temp">
          {weather.main.temp.toFixed(1)}°C
        </div>
        <div className="weather-details">
          <p><span>날씨:</span>{weather.weather[0].description}</p>
          <p><span>습도:</span>{weather.main.humidity}%</p>
          <p><span>풍속:</span>{weather.wind.speed} m/s</p>
        </div>
      </section>

      {/* 내일 날씨 */}
      <section className="info-section">
        <h2>내일 날씨에요!</h2>
        {tomorrowWeather ? (
          <>
            <div className="weather-temp">
              {tomorrowWeather.main.temp.toFixed(1)}°C
            </div>
            <div className="weather-details">
              <p><span>날씨:</span>{tomorrowWeather.weather[0].description}</p>
              <p><span>습도:</span>{tomorrowWeather.main.humidity}%</p>
              <p><span>풍속:</span>{tomorrowWeather.wind.speed} m/s</p>
            </div>
          </>
        ) : (
          <div>내일 데이터 없음</div>
        )}
      </section>

      {/* 공기질 */}
      <section className="info-section">
        <h2>오늘 대기질이에요!</h2>
        <div className="aqi-icon">{aqiInfo.icon}</div>
        <div className="aqi-message">{aqiInfo.message}</div>
      </section>
    </div>
  );
}
