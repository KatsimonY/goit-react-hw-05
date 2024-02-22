import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="rgba(255, 68, 0, 0.7)"
      secondaryColor="rgba(255, 68, 0, 0.7)"
      ariaLabel="oval-loading"
      textAlign="center"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
};
