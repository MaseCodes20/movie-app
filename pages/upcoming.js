import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import PageNavButtons from "../components/PageNavButtons";
import SearchMovies from "../components/searchMovies/SearchMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function Upcoming({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=${page}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        {searchTerm ? (
          <SearchMovies
            api={api}
            image={imageUrl}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ) : (
          <>
            <Movies
              movies={movies}
              api={api}
              image={imageUrl}
              searchTerm={searchTerm}
            />
            <PageNavButtons setPage={setPage} page={page} />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Upcoming;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
