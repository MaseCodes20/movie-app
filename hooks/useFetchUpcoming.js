import React, { useEffect, useState } from "react";

function useFetchUpcoming(url) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loadingUpcomingMovies, setLoadingUpcomingMovies] = useState(false);

  useEffect(() => {
    setLoadingUpcomingMovies(true);
    const fetchUpcomingMovies = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovies()
      .then((upcoming) => setUpcomingMovies(upcoming.results))
      .finally(() => setLoadingUpcomingMovies(false));
  }, [url]);
  return { upcomingMovies, loadingUpcomingMovies };
}

export default useFetchUpcoming;
