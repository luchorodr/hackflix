import { useState } from "react";
import SearchTitle from "./SearchTitle";
import { Link } from "react-router-dom";

export default function SearchByTitlePage() {
  const [keyword, setKeyword] = useState("");
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-5">
        <h1 style={{ color: "white" }}>Serch by title : </h1>
        <input type="text" onChange={handleChange} />
      </div>
      <SearchTitle keyword={keyword} />
    </div>
  );
}
