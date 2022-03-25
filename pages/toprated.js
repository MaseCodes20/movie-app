import React from "react";
import Header from "../components/Header";
import TopRatedMovies from "../components/topRatedMovies.js/TopRatedMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function toprated({ api, imageUrl }) {
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`
  );

  return (
    <div>
      <Header />
      <TopRatedMovies movies={movies} api={api} image={imageUrl} />
    </div>
  );
}

export default toprated;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
