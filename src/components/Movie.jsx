import { Link } from "react-router-dom";

export default function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((_genre) => (
          <li key={_genre}>{_genre}</li>
        ))}
      </ul>
    </div>
  );
}
