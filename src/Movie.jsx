import React from "react";

function Movie({ title, openDt, rank }) {
  return (
    <div>
      <h2>
        {rank}. {title}
      </h2>
      <h4>개봉일: {openDt}</h4>
      <br />
    </div>
  );
}

export default Movie;
