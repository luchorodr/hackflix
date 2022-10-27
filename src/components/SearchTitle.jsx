import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function SearchTitle({ keyword, setKeyword }) {
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US&query=${keyword}&include_adult=false&vote_average.gte=7`
      )
      .then(
        (response) => setSearchedMovie(response.data.results),
        (error) => console.log(error)
      );
  }, [keyword]);
  console.log(searchedMovie);
  return searchedMovie.length > 0 ? (
    <div className="row">
      {searchedMovie.map((movie) => {
        return (
          <div className="col-12 col-sm-6 col-md-3 col-lg-2 pse-2 mb-5">
            <Movie key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
  ) : (
    <h2 style={{ color: "white" }}>
      {" "}
      Lo sentimos no hay peliculas con ese nombre.
    </h2>
  );
}
