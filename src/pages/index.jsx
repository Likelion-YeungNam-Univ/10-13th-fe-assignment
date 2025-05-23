import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="flex justify-center">
      {loading ? (
        <span className="text-2xl">Loading...</span>
      ) : (
        <div className="flex flex-col space-y-10">
          {movies.map((_movie) => (
            <Movie
              id={_movie.id}
              key={_movie.id}
              coverImg={_movie.medium_cover_image}
              title={_movie.title}
              summary={_movie.summary}
              genres={_movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
