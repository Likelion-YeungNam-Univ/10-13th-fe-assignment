import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("불러오기 실패 😢:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-2xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-6 py-10 bg-gray-50 min-h-screen">
      <div className="flex max-w-5xl w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={movie.large_cover_image}
          alt={movie.title}
          className="w-80 h-auto object-cover flex-shrink-0"
        />

        <div className="p-6 flex flex-col justify-between space-y-6 w-full">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">{movie.title}</h2>
            <div className="mt-2 text-gray-500 text-sm">
              📅 {movie.year} &nbsp;•&nbsp; ⭐ {movie.rating}
            </div>
          </div>

          {movie.description_full && (
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-1">
                Description
              </h3>
              <p className="text-base text-gray-700 whitespace-pre-line max-h-60 overflow-auto pr-2">
                {movie.description_full}
              </p>
            </div>
          )}

          {movie.genres && (
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-1">
                Genres
              </h3>
              <ul className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <li
                    key={genre}
                    className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {movie.runtime && (
            <div className="text-sm text-gray-500">
              ⏱ Runtime: {movie.runtime} minutes
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
