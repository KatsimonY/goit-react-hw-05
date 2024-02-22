import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import { Navigation } from "./Navigation";
import { MovieCast } from "./MovieCast";
import { MovieReviews } from "./MovieReviews";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
