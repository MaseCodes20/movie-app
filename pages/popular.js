import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovies from "../components/popularMovies/PopularMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function popular({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
  );

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        <PopularMovies
          movies={movies}
          api={api}
          image={imageUrl}
          searchTerm={searchTerm}
        />
        <Footer />
      </div>
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
