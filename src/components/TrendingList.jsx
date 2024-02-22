import { Link } from "react-router-dom";
import css from "./TrendingList.module.css";

export const TrendingList = ({ films }) => {
  return (
    <ul className={css.container}>
      {films.map((film) => (
        <li key={film.id} className={css.cardWrapper}>
          <Link to={`/movies/${film.id}`}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
              alt={film.original_title}
            ></img>
            <h2 className={css.productName}>{film.original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
