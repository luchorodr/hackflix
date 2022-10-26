import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const [movie, setMovie] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US`
      )
      .then((response) => setMovie(response));
  });
  return (
    <div>
      Hola Mundo
      {/* <h1>{movie.title}</h1>
      <h2>{movie.id}</h2> */}
    </div>
  );
}
