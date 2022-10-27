import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import Spinner from "react-bootstrap/Spinner";

export default function Pagination() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then(
        (response) => {
          setMovies(response.data.results);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [page]);

  return movies ? (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-12 col-sm-6 col-md-3 col-lg-2 pse-2 mb-5">
              <Movie key={movie.id} movie={movie} />
            </div>
          );
        })}
      </div>
      <div id="paginacion" className="d-flex justifi-content-center">
        <button onClick={() => setPage(1)}>First</button>
        {page !== 1 && <button onClick={() => setPage(page - 1)}>Back</button>}
        {page !== 1 && (
          <button onClick={() => setPage(page - 1)}>{page - 1}</button>
        )}
        <button
          style={{ color: "azul", fontWeight: "bolder", fontSize: "larger" }}
        >
          {page}
        </button>
        {page !== 100 && (
          <button onClick={() => setPage(page + 1)}>{page + 1}</button>
        )}
        {page !== 100 && (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
        <button onClick={() => setPage(100)}>Last</button>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
