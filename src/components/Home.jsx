import { useState } from "react";
import Stars from "../components/Rating";
import DiscoveredMovieList from "../components/DiscoveredMovieList";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [thisMovie, setThisMovie] = useState(null);

  return (
    <>
      <div className=" mb-4"></div>
      <Stars rating={rating} setRating={setRating} />
      <div className="container">
        <DiscoveredMovieList
          rating={rating}
          setRating={setRating}
          thisMovie={thisMovie}
          setThisMovie={setThisMovie}
        />
      </div>
    </>
  );
}
