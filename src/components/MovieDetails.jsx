import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spiner from "./spinner";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      });
  }, []);

  return movie ? (
    <div className="container mt-4">
      <div className="row" style={{ color: "white" }}>
        <div className="col-12 col-sm-6 col-lg-5 ">
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie poster"
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-5  ">
          <h1 className=" ">{movie.title}</h1>
          <h2 className=" ">{movie.tagline}</h2>
          <p className="pe-3">{movie.overview}</p>
          <button style={{ backgroundColor: "red", border: "none" }}>
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Spiner />
  );
}
