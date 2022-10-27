import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <div>
      <img
        className="img-fluid"
        src="https://cdn3.vectorstock.com/i/1000x1000/67/12/404-error-page-background-vector-20596712.jpg"
        alt=""
      />
      <Link to="/" style={{ fontSize: "larger", color: "red" }}>
        {" "}
        Go back to home{" "}
      </Link>
    </div>
  );
}
