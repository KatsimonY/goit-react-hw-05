import { BackLink } from "../components/BackLink";
import { GoArrowLeft } from "react-icons/go";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.error}>404 - Not Found</h1>
      <p className={css.text}>
        Sorry, this movie doesn't exist yet. But there are many others 😉
      </p>
      <BackLink href={"/"}>
        <GoArrowLeft size="24" /> Go back to home
      </BackLink>
    </div>
  );
}
