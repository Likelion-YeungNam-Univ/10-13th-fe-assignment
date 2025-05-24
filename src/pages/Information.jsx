import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie.jsx";

const Information = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6c7cc8ccf585ce61b4621b85072ce91f&targetDt=20120101"
      );
      const {
        boxOfficeResult: { dailyBoxOfficeList },
      } = response.data;
      setMovies(dailyBoxOfficeList);
    } catch (err) {
      console.error("목록을 불러오는 중 오류 발생:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.movieCd}
            title={movie.movieNm}
            openDt={movie.openDt}
            rank={movie.rank}
          />
        ))
      )}
    </div>
  );
};

export default Information;
