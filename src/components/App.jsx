import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Loader } from "./Loader";
import { MovieCast } from "./MovieCast";
import { MovieReviews } from "./MovieReviews";
import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
