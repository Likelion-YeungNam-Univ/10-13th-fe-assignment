import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMoiveData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "445a5a31";

  useEffect(() => {
    if (movieTitle) {
      axios
        .get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
        .then((response) => {
          if (response.data.Response === "True") {
            setMoiveData(response.data);
            setError("");
          } else {
            setMoiveData(null);
            setError("영화를 찾을 수 없습니다.");
          }
        })
        .catch(() => {
          setError("API 요청 실패");
        });
    }
  }, [movieTitle]);

  return (
    <div className="App">
      <h1>영화 정보 검색</h1>
      <input
        type="text"
        placeholder="영화 제목을 입력하세요"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      {error && <p>{error}</p>}
      {movieData && (
        <div>
          <h2>{movieData.Title}</h2>
          <p>{movieData.Year}</p>
          <p>{movieData.Genre}</p>
          <p>{movieData.plot}</p>
        </div>
      )}
    </div>
  );
}

export default App;
