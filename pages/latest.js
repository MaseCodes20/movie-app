import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovies from "../components/latestMovies/LatestMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function latest({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=${page}`
  );

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  console.log(page);
  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        <LatestMovies
          movies={movies}
          api={api}
          image={imageUrl}
          searchTerm={searchTerm}
        />
        <div>
          <h1 onClick={() => nextPage()}>+</h1>
        </div>
        <Footer />
      </div>
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
