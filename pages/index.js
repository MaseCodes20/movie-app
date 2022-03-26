import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMovies from "../components/searchMovies/SearchMovies";

export default function Home({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(movies);
  return (
    <div className="pageContainer h-screen">
      <div className="contentContainer">
        <Head>
          <title>Movie App</title>
          <meta name="description" content="movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header setSearchTerm={setSearchTerm} />

        {searchTerm ? (
          <SearchMovies api={api} image={imageUrl} searchTerm={searchTerm} />
        ) : (
          <div className="centered text-center">
            <h1 className="font-bold text-3xl">Welcome to the movie app</h1>
            <p>Need a movie for movie night?</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const api = process.env.TMDB_KEY;
  const imageUrl = process.env.IMG_URL;
  const genresList = process.env.GENRES_LIST_HTTP;
  return {
    props: { api, imageUrl, genresList },
  };
}
