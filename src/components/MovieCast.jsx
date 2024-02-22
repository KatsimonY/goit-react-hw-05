import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../api";
import css from "./MovieCast.module.css";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCast = await getCast(movieId);
        setCast(fetchedCast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {cast?.length ? (
        <ul className={css.container}>
          {cast.map((star) => (
            <li key={star.id} className={css.star}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + star.profile_path}
                alt={star.name}
                className={css.photo}
                onError={(e) => {
                  e.target.src = "https://placehold.co/100x150?text=No+Photo";
                }}
              ></img>
              <div>
                <h4 className={css.name}>{star.name}</h4>
                <p className={css.character}>{star.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.null}>No information 🤷</p>
      )}
    </>
  );
};
