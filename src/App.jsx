import "./App.css";
import MovieCard from "./components/MovieCard";
import { getTrendingMovies, searchMovies } from "./services/api.js";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchTrendingMovies() {
      const trending = await getTrendingMovies();
      setMovies(trending);
    }
    fetchTrendingMovies();
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    async function handleSearchMovies() {
      if (search.trim() === "") return;
      const results = await searchMovies(search);
      setMovies(results);
    }
    handleSearchMovies();
    setLoading(false);
  }, [search]);

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <input
            type="text"
            onChange={handleOnChange}
            value={search}
            placeholder="search"
          />
        </div>

        {loading && <CircularProgress />}
        <div className="movies">
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <MovieCard
                key={movie.id || index}
                imgUrl={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
