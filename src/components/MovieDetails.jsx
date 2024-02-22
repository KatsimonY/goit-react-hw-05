import css from "./MovieDetails.module.css";
import { GoStarFill } from "react-icons/go";

export const MovieDetails = ({ movie }) => {
  return (
    <div className={css.container}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.original_title}
        width="300"
      ></img>
      <div>
        <h1>{movie.original_title}</h1>
        <h2 className={css.rating}>
          <GoStarFill fill="gold" /> {movie.vote_average}/10
        </h2>
        <ul className={css.list}>
          {movie.genres.map((genre) => (
            <li key={genre.id} className={css.genre}>
              {genre.name}
            </li>
          ))}
        </ul>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
