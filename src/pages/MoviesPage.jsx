import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter } from "../components/Filter";
import { MovieList } from "../components/MovieList";
import { getFilteredMovies } from "../api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  const filter = params.get("query") ?? "";

  const changeFilter = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getFilteredMovies(filter);
        setMovies(fetchedMovies);
      } catch (error) {}
    }
    fetchData();
  }, [filter]);

  return (
    <main>
      <h1>Discover Movies of Interest</h1>
      <Filter value={filter} onChange={changeFilter} />
      {movies.length > 0 && <MovieList films={movies} />}
    </main>
  );
}
