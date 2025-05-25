import { Link } from "react-router-dom";
export default function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="flex max-w-5xl w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={coverImg}
        alt={title}
        className="w-60 h-auto object-cover flex-shrink-0"
      />

      <div className="p-6 flex flex-col justify-between space-y-4 w-full">
        <h2 className="text-3xl font-bold text-gray-800">
          <Link
            to={`/movie/${id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {title}
          </Link>
        </h2>

        {summary && (
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-1">
              Summary
            </h3>
            <p className="text-base text-gray-700 whitespace-pre-line max-h-40 overflow-auto pr-2">
              {summary}
            </p>
          </div>
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-1">Genres</h3>
          <ul className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <li
                key={genre}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
