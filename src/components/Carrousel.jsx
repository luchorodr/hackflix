import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import axios from "axios";
import "./carrousel.css";

export default function Carrousel() {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=6e8562b0e514fc96c8a863f4fcbb65df&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      });
  }, []);

  return (
    movies.length > 0 && (
      <div
        id="carrousel"
        className="container d-none d-lg-flex justify-content-center "
      >
        <Carousel
          slide={false}
          className="h-100"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item className="h-100">
            <img
              className="d-block w-100  "
              src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{movies[0].title}</h3>
              <small>{movies[0].overview}</small>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original/${movies[1].backdrop_path}`}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{movies[1].title}</h3>
              <small>{movies[1].overview}</small>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original/${movies[2].backdrop_path}`}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{movies[2].title}</h3>
              <small>{movies[2].overview}</small>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  );
}
