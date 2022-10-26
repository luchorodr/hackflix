import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./MovieAPI";

function DiscoveredMovieList({ setThisMovie, rating, setRating, thisMovie }) {
  const [discoveredMovies, setDiscoveredMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then(
        (response) => {
          setDiscoveredMovies(response.data.results);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(discoveredMovies);

  return (
    discoveredMovies && (
      <>
        {discoveredMovies
          .filter((movie) => {
            return movie.vote_average > (rating - 1) * 2;
          })
          .map((movie) => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                thisMovie={thisMovie}
                setThisMovie={setThisMovie}
              />
            );
          })}
      </>
    )
  );
}
export default DiscoveredMovieList;
