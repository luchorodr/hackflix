import React from "react";
import "./movie.css";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <Link to={`pelicula/${movie.id}`}>
      <img
        className="card img-fluid"
        style={{ border: "none" }}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
    </Link>
  );
}

export default Movie;
