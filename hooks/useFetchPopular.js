import { useState, useEffect } from "react";

function useFetchPopular(url) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);

  useEffect(() => {
    setLoadingPopularMovies(true);
    const fetchPopularMovies = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopularMovies()
      .then((popular) => setPopularMovies(popular.results))
      .finally(() => setLoadingPopularMovies(false));
  }, [url]);
  return {
    popularMovies,
    loadingPopularMovies,
  };
}

export default useFetchPopular;
