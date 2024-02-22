import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.container}>
      {films.map((film) => (
        <li key={film.id} className={css.cardWrapper}>
          <Link to={`/movies/${film.id}`} state={location} className={css.link}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
              alt={film.original_title}
              onError={(e) => {
                e.target.src = "https://placehold.co/300x450?text=No+image";
              }}
            ></img>
            <h2 className={css.overlay}>{film.original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
