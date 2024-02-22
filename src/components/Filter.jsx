import css from "./Filter.module.css";

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter movie's title"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
