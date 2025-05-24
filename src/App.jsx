import React from "react";
import axios from "axios";
import Movie from "./Movie.jsx";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    try {
      const {
        data: {
          boxOfficeResult: { dailyBoxOfficeList },
        },
      } = await axios.get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=6c7cc8ccf585ce61b4621b85072ce91f&targetDt=20120101"
      );
      console.log(dailyBoxOfficeList); // 확인용
      this.setState({ movies: dailyBoxOfficeList, isLoading: false });
    } catch (error) {
      console.error("API 호출 실패:", error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.movieCd}
                  title={movie.movieNm}
                  openDt={movie.openDt}
                  rank={movie.rank}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
