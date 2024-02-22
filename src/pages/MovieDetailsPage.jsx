import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../api";
import { MovieDetails } from "../components/MovieDetails";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {}
    }
    fetchData();
  }, [movieId]);

  return (
    <main>
      {movie && <MovieDetails movie={movie} />}
      <ul className={css.container}>
        <li className={css.item}>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
