import React from "react";
import Header from "../components/Header";
import TopRatedMovies from "../components/topRatedMovies.js/TopRatedMovies";
import useFetchTopRated from "../hooks/useFetchTopRated";

function toprated({ api, imageUrl }) {
  const { topRatedMovies, loadingTopRatedMovies } = useFetchTopRated(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`
  );
  return (
    <div>
      <Header />
      <TopRatedMovies
        topRatedMovies={topRatedMovies}
        api={api}
        image={imageUrl}
      />
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
