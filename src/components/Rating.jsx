import { Rating } from "react-simple-star-rating";

export default function Stars({ rating, setRating }) {
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} />
    </div>
  );
}
