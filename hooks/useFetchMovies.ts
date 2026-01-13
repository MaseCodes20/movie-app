import { useState, useEffect, useRef } from "react";

function useFetchMovies(url: string) {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const mountedRef = useRef(true);

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

    if (mountedRef) {
      fetchMovies()
        .then((movie) => setMovies(movie.results))
        .finally(() => setLoadingMovies(false));
    }

    return () => {
      mountedRef.current = false;
    };
  }, [url]);

  return { movies, loadingMovies };
}

export default useFetchMovies;
