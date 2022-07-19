import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "3f1c334f9556d8465b9592eec2879ef0";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <Seo title="About" />
      {!movies && <h4>Loading..</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
