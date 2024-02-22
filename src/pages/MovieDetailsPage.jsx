import { useEffect, useRef, useState } from "react";
import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieById } from "../api";
import { MovieDetails } from "../components/MovieDetails";
import { BackLink } from "../components/BackLink";
import { GoArrowLeft } from "react-icons/go";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <main>
      <BackLink href={backLinkRef.current ?? "/"}>
        <GoArrowLeft size="24" /> Go back
      </BackLink>
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
