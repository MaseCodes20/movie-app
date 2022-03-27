import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMovies from "../components/searchMovies/SearchMovies";

export default function Home({ api, imageUrl }) {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(movies);
  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Head>
          <title>Movie App</title>
          <meta name="description" content="movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header setSearchTerm={setSearchTerm} />

        {searchTerm ? (
          <div className="lg:h-[600px] lg:mt-8 top-0 bottom-0 overflow-y-scroll scrollbar-hide">
            <SearchMovies api={api} image={imageUrl} searchTerm={searchTerm} />
          </div>
        ) : (
          <div className="h-screen relative">
            <div className="centered text-center">
              <h1 className="font-bold text-3xl">Welcome to the movie app</h1>
              <p>Need a movie for movie night?</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
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
