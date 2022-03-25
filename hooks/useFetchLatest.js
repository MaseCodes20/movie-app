import React, { useEffect, useState } from "react";

function useFetchLatest(url) {
  const [latestMovies, setLatestMovies] = useState([]);
  const [loadingLatestMovies, setLoadingLatestMovies] = useState(false);

  useEffect(() => {
    setLoadingLatestMovies(true);
    const fetchLatestMovies = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestMovies()
      .then((latest) => setLatestMovies(latest.results))
      .finally(() => setLoadingLatestMovies(false));
  }, [url]);

  return { latestMovies, loadingLatestMovies };
}

export default useFetchLatest;
