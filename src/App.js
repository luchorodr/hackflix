import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pelicula/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
