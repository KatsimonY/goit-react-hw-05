import { useEffect, useState } from "react";
import { getTrending } from "../api";
import { MovieList } from "../components/MovieList";

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedFilms = await getTrending();
        setFilms(fetchedFilms);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {films.length > 0 && <MovieList films={films} />}
    </main>
  );
}
