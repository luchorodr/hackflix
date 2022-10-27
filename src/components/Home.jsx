import { useState } from "react";

import DiscoveredMovieList from "../components/DiscoveredMovieList";
import Carrousel from "./Carrousel";

export default function Home() {
  const [thisMovie, setThisMovie] = useState(null);

  return (
    <>
      <div className="  p-4">
        <Carrousel />
      </div>

      <div className="container">
        <DiscoveredMovieList
          thisMovie={thisMovie}
          setThisMovie={setThisMovie}
        />
      </div>
    </>
  );
}
