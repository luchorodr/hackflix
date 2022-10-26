import Movie from "./MovieLocal";
// import Movie from "./components/movie"; <Movie movieID={436270} />;

function MoviesList({
  rating,
  setRating,
  data,
  thisMovie,
  setThisMovie,
  modalStatus,
  setModalStatus,
}) {
  return (
    <div className="container">
      <div className="row">
        {data
          .filter((movie) => {
            return movie.vote_average > (rating - 1) * 2;
          })
          .map((movie) => {
            return (
              <Movie
                movie={movie}
                thisMovie={thisMovie}
                setThisMovie={setThisMovie}
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
              />
            );
          })}
      </div>
    </div>
  );
}
export default MoviesList;
