import { useEffect, useState } from "react";
import { getTrending } from "../api";
import { TrendingList } from "../components/TrendingList";

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedFilms = await getTrending();
        setFilms(fetchedFilms);
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {films.length > 0 && <TrendingList films={films} />}
    </main>
  );
}
