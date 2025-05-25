import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const getMovies = async (page) => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&page=${page}&limit=20`
    );
    if (response.ok) {
      const json = await response.json();
      setMovies(json.data.movies);
      const totalCount = json.data.movie_count;
      const pageSize = json.data.limit;
      setTotalPages(Math.ceil(totalCount / pageSize));
      setLoading(false);
    } else {
      alert("오류 발생!");
    }
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      {loading ? (
        <span className="text-2xl">Loading...</span>
      ) : (
        <>
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

          {/* 페이지 네비게이션 */}
          <div className="flex space-x-4 mt-10">
            <button
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              ◀ 이전
            </button>
            <span className="text-xl">
              {currentPage} / {totalPages}
            </span>
            <button
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              다음 ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
}
