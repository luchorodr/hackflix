import React from "react";
import "./movie.css";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <Link to={`/pelicula/${movie.id}`}>
      <img
        className="poster card img-fluid"
        style={{ border: "none" }}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg"
        }
        alt=""
      />
    </Link>
  );
}

export default Movie;
