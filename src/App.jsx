import React, { useEffect, useState } from "react";

// OpenWeatherMap API 키를 변수에 저장
const API_KEY = "248ae18d984f623c4b752e664091236f";

function App() {
  // 날씨 데이터를 저장할 상태 (초기값 null)
  const [weather, setWeather] = useState(null);
  // 로딩 상태를 저장할 상태 (초기값 true)
  const [loading, setLoading] = useState(true);
  // 에러 메시지를 저장할 상태 (초기값 null)
  const [error, setError] = useState(null);

  // 컴포넌트가 처음 렌더링 될 때 한 번 실행되는 useEffect
  useEffect(() => {
    // fetch로 API 호출: 대구 날씨 데이터를 요청함 (units=metric으로 섭씨 온도)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Daegu&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        // 응답이 정상(200~299)일 때만 json 변환, 아니면 에러 던짐
        if (!res.ok) throw new Error("API 요청 실패");
        return res.json();
      })
      .then((data) => {
        // 받아온 데이터를 상태에 저장
        setWeather(data);
        // 로딩 완료 상태로 변경
        setLoading(false);
      })
      .catch((err) => {
        // 에러가 발생하면 에러 메시지를 상태에 저장하고 로딩 종료
        setError(err.message);
        setLoading(false);
      });
  }, []); // 빈 배열은 컴포넌트 첫 렌더링 시 1회만 실행하라는 뜻

  // 로딩 중일 때 화면에 표시할 내용
  if (loading) return <div>로딩 중...</div>;
  // 에러가 있을 때 화면에 표시할 내용
  if (error) return <div>에러: {error}</div>;

  // API에서 받은 날씨 데이터를 화면에 렌더링
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>대구 날씨</h1>
      <p>온도: {weather.main.temp}°C</p>
      <p>날씨: {weather.weather[0].description}</p>
      <p>습도: {weather.main.humidity}%</p>
      <p>풍속: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default App;
