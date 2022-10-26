import "./App.css";
// import MoviesList from "./components/MovieList";
// import data from "./movie_db.json";
import Header from "./components/Header";
import Stars from "./components/Rating";
import { useState } from "react";
import MovieModal from "./components/Modal";
import DiscoveredMovieList from "./components/DiscoveredMovieList";

function App() {
  const [rating, setRating] = useState(0);
  const [thisMovie, setThisMovie] = useState(null);

  return (
    <div className="App bg-dar">
      <div className=" mb-4">
        <Header />
      </div>
      <Stars rating={rating} setRating={setRating} />
      <div className="container">
        <div className="row">
          <DiscoveredMovieList
            rating={rating}
            setRating={setRating}
            thisMovie={thisMovie}
            setThisMovie={setThisMovie}

            /*{ <MoviesList
            rating={rating}
            setRating={setRating}
            thisMovie={thisMovie}
            setThisMovie={setThisMovie}
            data={data}
            
          /> 
        }*/
          />
        </div>
      </div>

      <div className="modalscreen">
        {thisMovie && (
          <MovieModal thisMovie={thisMovie} setThisMovie={setThisMovie} />
        )}
      </div>
    </div>
  );
}

export default App;
