import React from "react";
import Header from "../components/Header";
import LatestMovies from "../components/latestMovies/LatestMovies";
import useFetchLatest from "../hooks/useFetchLatest";

function latest({ api, imageUrl }) {
  const { latestMovies, loadingLatestMovies } = useFetchLatest(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
  );
  console.log(latestMovies);
  return (
    <div>
      <Header />
      <LatestMovies latestMovies={latestMovies} api={api} image={imageUrl} />
    </div>
  );
}

export default latest;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
