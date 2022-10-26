import React from "react";

function Movie({ movie, movieID, setThisMovie, thisMovie }) {
  return (
    <>
      <div className="col-2 pse-2 mb-5">
        <button
          onClick={() => {
            setThisMovie(movie);
          }}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <div className="card" style={{ border: "none" }}>
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          </div>
        </button>
      </div>
    </>
  );
}

export default Movie;
