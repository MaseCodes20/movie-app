import React, { useEffect, useState } from "react";

function useFetchTopRated(url) {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loadingTopRatedMovies, setLoadingTopRatedMovies] = useState(false);

  useEffect(() => {
    setLoadingTopRatedMovies(true);
    const fetchTopRatedMovies = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopRatedMovies()
      .then((topRated) => setTopRatedMovies(topRated.results))
      .finally(() => setLoadingTopRatedMovies(false));
  }, [url]);

  return { topRatedMovies, loadingTopRatedMovies };
}

export default useFetchTopRated;
