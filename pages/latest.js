import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovies from "../components/latestMovies/LatestMovies";
import PageNavButtons from "../components/PageNavButtons";
import useFetchMovies from "../hooks/useFetchMovies";

function latest({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=${page}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
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
        <PageNavButtons prevPage={prevPage} page={page} nextPage={nextPage} />
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
