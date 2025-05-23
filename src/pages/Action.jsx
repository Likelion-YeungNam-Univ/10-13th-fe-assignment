import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Action = () => {
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=5bfdfd938b524a65881c8c54be388cb5&with_genres=28`
      );
      setActions(response.data.results);
    } catch (error) {
      setError("데이터 로딩 실패");
      console.error("데이터 로딩 실패", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>로딩 중......</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div>
      <h1 className="text-3xl text-center pt-10 font-bold">Action 영화 목록</h1>
      <ul className="grid grid-cols-4 gap-10 px-30 py-10">
        {actions.map((action) => (
          <li key={action.id} className="">
            <Link to={`/action/${action.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${action.poster_path}`}
              />
              <div className="flex justify-between">
                <p className="text-xl font-bold pt-2">{action.title}</p>
                <p className="text-gray-600 pt-3">★{action.vote_average}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Action;
