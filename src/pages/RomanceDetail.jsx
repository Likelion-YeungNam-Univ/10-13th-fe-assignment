import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RomanceDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=5bfdfd938b524a65881c8c54be388cb5&language=ko-KR`
        );
        setMovie(res.data);
      } catch (err) {
        setError("영화 정보를 불러오지 못했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>영화 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="pt-20 px-10 flex space-x-10">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        className="mt-4"
      />
      <div className="pt-10">
        <h1 className="text-3xl font-bold mb-4">
          {movie.title} ({movie.release_date})
        </h1>
        <div>
          <span className="text-gray-400">개봉: </span>
          <span className="text-white">{movie.release_date} </span>
        </div>
        <div>
          <span className="text-gray-400">줄거리: </span>
          <span className="text-white">{movie.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default RomanceDetail;
