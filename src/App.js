import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import SearchByTitlePage from "./components/SearchByTitlePage";
import Pagination from "./components/Paginacion";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="pelicula/:id" element={<MovieDetails />} />
        <Route
          path="/movie/:id"
          element={<Navigate replace to="/pelicula/:id" />}
        />
        ;
        <Route path="search-by-title" element={<SearchByTitlePage />} />
        <Route path="search-by-rating" element={<MovieDetails />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
<Route path="alumnos" element={<Navigate replace to="/estudiantes" />} />;

export default App;
