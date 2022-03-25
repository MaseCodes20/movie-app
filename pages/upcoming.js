import React from "react";
import Header from "../components/Header";
import UpcomingMovies from "../components/upcomingMovies/UpcomingMovies";
import useFetchUpcoming from "../hooks/useFetchUpcoming";

function upcoming({ api, imageUrl }) {
  const { upcomingMovies, loadingUpcomingMovies } = useFetchUpcoming(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`
  );
  return (
    <div>
      <Header />
      <UpcomingMovies
        upcomingMovies={upcomingMovies}
        api={api}
        image={imageUrl}
      />
    </div>
  );
}

export default upcoming;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
