import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";

function DiscoveredMovieList({ setThisMovie, rating, setRating, thisMovie }) {
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then(
        (response) => {
          setDiscoveredMovies((prevDiscoveredMovies) =>
            prevDiscoveredMovies.concat(response.data.results)
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }, [page]);

  return (
    discoveredMovies && (
      <InfiniteScroll
        dataLength={discoveredMovies.length} //This is important field to render the next data
        next={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="row">
          {discoveredMovies.map((movie) => {
            return (
              <div className="col-12 col-sm-6 col-md-3 col-lg-2 pse-2 mb-5">
                <Movie
                  key={movie.id}
                  movie={movie}
                  thisMovie={thisMovie}
                  setThisMovie={setThisMovie}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    )
  );
}
export default DiscoveredMovieList;
