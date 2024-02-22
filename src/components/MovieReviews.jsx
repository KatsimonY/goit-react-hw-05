import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../api";
import { GoStarFill } from "react-icons/go";
import css from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedReviews = await getReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews?.length ? (
        <ul className={css.container}>
          {reviews.map((review) => (
            <li key={review.id} className={css.review}>
              <div className={css.wrapper}>
                <h4 className={css.author}>Author: {review.author}</h4>
                <h4 className={css.rating}>
                  <GoStarFill fill="gold" />{" "}
                  {review.author_details.rating === null
                    ? "No rating"
                    : `${review.author_details.rating}/10`}
                </h4>
              </div>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.null}>No reviews yet 🤔</p>
      )}
    </>
  );
};
