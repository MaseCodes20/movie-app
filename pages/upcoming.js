import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpcomingMovies from "../components/upcomingMovies/UpcomingMovies";
import useFetchMovies from "../hooks/useFetchMovies";

function upcoming({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loadingMovies } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`
  );

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        <UpcomingMovies
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

export default upcoming;

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
