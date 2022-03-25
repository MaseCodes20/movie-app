import { useState, useEffect } from "react";

function useFetchMovies(url) {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);

  useEffect(() => {
    setLoadingMovies(true);
    const fetchMovies = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies()
      .then((movie) => setMovies(movie.results))
      .finally(() => setLoadingMovies(false));
  }, [url]);

  return { movies, loadingMovies };
}

export default useFetchMovies;
