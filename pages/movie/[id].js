import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cast from "../../components/moviePage/Cast";
import Details from "../../components/moviePage/Details";
import Providers from "../../components/moviePage/Providers";
import SimilarMovies from "../../components/moviePage/SimilarMovies";
import Videos from "../../components/moviePage/Videos";
import SearchMovies from "../../components/searchMovies/SearchMovies";

function MoviePage({
  details,
  credits,
  providers,
  videos,
  similarMovies,
  imageUrl,
  api,
  id,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const { title, poster_path } = details;

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
          <div className="mx-auto ">
            <div className="md:flex justify-center bg-black text-white">
              <img
                src={`${imageUrl}${poster_path}`}
                alt={title}
                className="max-h-screen mx-auto"
              />

              <div className="mx-8">
                <div className="md:flex justify-center">
                  <Details details={details} imageUrl={imageUrl} />
                  <Providers providers={providers} />
                </div>

                <div className="text-sm">
                  <div className="flex justify-center">
                    <Cast id={id} credits={credits} />
                    <Videos videos={videos} id={id} />
                  </div>
                </div>
              </div>
            </div>

            <SimilarMovies
              similarMovies={similarMovies}
              image={imageUrl}
              api={api}
              setSearchTerm={setSearchTerm}
            />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default MoviePage;

export async function getServerSideProps(context) {
  const api = process.env.TMDB_KEY;
  const id = context.query.id;
  const imageUrl = process.env.IMG_URL;

  const fetchVideos = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`
  );
  const videos = await fetchVideos.json().then((videos) => videos.results);

  const fetchDetails = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`
  );
  const details = await fetchDetails.json();

  const fetchCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api}&language=en-US`
  );
  const credits = await fetchCredits.json().then((casts) => casts.cast);

  const fetchProviders = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api}`
  );
  const providers = await fetchProviders
    .json()
    .then((providers) => providers.results);

  const fetchSimilarMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api}&language=en-US&page=1`
  );
  const similarMovies = await fetchSimilarMovies
    .json()
    .then((similarMovies) => similarMovies.results);

  return {
    props: {
      videos,
      details,
      credits,
      providers,
      similarMovies,
      id,
      api,
      imageUrl,
    },
  };
}
