import React from "react";
import Header from "../components/Header";
import PopularMovies from "../components/popularMovies/PopularMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function popular({ api, imageUrl }) {
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
  );

  return (
    <div>
      <Header />
      <PopularMovies movies={movies} api={api} image={imageUrl} />
    </div>
  );
}

export default popular;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
