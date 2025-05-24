import React from "react";

function Movie({ title, openDt, rank }) {
  return (
    <div className="flex flex-col items-center mt-5 space-y-2">
      <h2 className="text-xl font-bold text-green-900">
        {rank}. {title}
      </h2>
      <h4 className="text-sm text-green-600">개봉일: {openDt}</h4>
    </div>
  );
}

export default Movie;
