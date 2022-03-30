import { PlusIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Movie from "../../components/Movie";
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
  const [selectedCast, setSelectedCast] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCast, selectedVideos]);

  const toggleCast = (id) => {
    setSelectedCast((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };

  const toggleVideos = (id) => {
    setSelectedVideos((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };
  const {
    title,
    overview,
    poster_path,
    release_date,
    runtime,
    status,
    production_companies,
    genres,
  } = details;

  return (
    <div className="bg-black text-white">
      <Header setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <SearchMovies api={api} image={imageUrl} searchTerm={searchTerm} />
      ) : (
        <div className="mx-auto ">
          <div className="md:flex justify-center bg-black text-white">
            <img
              src={`${imageUrl}${poster_path}`}
              alt={title}
              className="max-h-screen"
            />

            <div className="mx-8">
              <div className="md:flex justify-center">
                <div className="mt-4 mx-auto">
                  <h1 className="text-center font-bold text-4xl">{title}</h1>
                  <p className="max-w-[400px] mx-auto mt-4">{overview}</p>
                  <div className="flex justify-center mt-6">
                    <p className="dataText">Release date:</p>
                    <p>{release_date}</p>
                  </div>

                  <div className="flex justify-center mt-2">
                    <p className="dataText">Runtime:</p>
                    <p>{runtime} minutes</p>
                  </div>

                  <div className="flex justify-center mt-2">
                    <p className="dataText">Status:</p>
                    <p>{status}</p>
                  </div>

                  <div className="companiesAndGenresContainer">
                    <p className="mr-2 text-center">Production companies</p>
                    <div className="companiesAndGenresGrid">
                      {production_companies?.map((company) => {
                        const { id, logo_path, name } = company;
                        return (
                          <div key={id} className="p-2">
                            <p className="text-center">{name}</p>
                            <img
                              src={`${imageUrl}${logo_path}`}
                              alt={name}
                              className="h-7 mx-auto"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="companiesAndGenresContainer">
                    <p className="text-center">Genres</p>
                    <div className="companiesAndGenresGrid">
                      {genres?.map((genre) => {
                        const { id, name } = genre;
                        return <p key={id}>{name}</p>;
                      })}
                    </div>
                  </div>
                </div>

                <div className="md:flex justify-center ml-2 mt-4">
                  {providers.US?.rent && (
                    <div className="mx-2">
                      <h1 className="font-bold text-center text-pink-500">
                        Rent
                      </h1>
                      {providers.US.rent?.map((rent) => {
                        const { provider_id, provider_name } = rent;
                        return (
                          <p
                            className="bg-pink-500 rounded-md my-1 text-center text-white p-2"
                            key={provider_id}
                          >
                            {provider_name}
                          </p>
                        );
                      })}
                    </div>
                  )}
                  {providers.US?.buy && (
                    <div>
                      <h1 className="font-bold text-center text-blue-500">
                        Buy
                      </h1>
                      {providers.US.buy?.map((buy) => {
                        const { provider_id, provider_name } = buy;
                        return (
                          <p
                            className="bg-blue-500 rounded-md my-1 text-center text-white p-2"
                            key={provider_id}
                          >
                            {provider_name}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm">
                <div className="flex justify-center">
                  <button className="castButton" onClick={() => toggleCast(id)}>
                    {selectedCast.find((item) => item === id) !== id && (
                      <div className="buttonContent">
                        <h1>Cast</h1>
                        <PlusIcon className="h-7" />
                      </div>
                    )}
                  </button>

                  <button
                    className="videosButton"
                    onClick={() => toggleVideos(id)}
                  >
                    {selectedCast.find((item) => item === id) !== id && (
                      <div className="buttonContent">
                        <h1>Videos</h1>
                        <PlusIcon className="h-7" />
                      </div>
                    )}
                  </button>
                </div>

                {selectedCast.find((item) => item === id) === id && (
                  <div className="castAndVideosContainer">
                    <div className="relative">
                      <h1 className="castAndVideosTitle">Cast</h1>
                      <div className="castAndVideosGrid">
                        {credits?.map((cast) => {
                          const { character, name, cast_id } = cast;
                          return (
                            <div className="flex" key={cast_id}>
                              <p className="dataText">{character}:</p>
                              <p>{name}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="" onClick={() => toggleCast(id)}>
                        {selectedCast.find((item) => item === id) === id && (
                          <button className="absolute z-20 bg-blue-500 top-0 text-white right-0">
                            <PlusIcon className="plusIcon" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedVideos.find((item) => item === id) === id && (
                  <div className="castAndVideosContainer">
                    <div className="relative">
                      <h1 className="castAndVideosTitle">Videos</h1>
                      <div className="castAndVideosGrid">
                        {videos?.map((video) => {
                          const { key, name, id } = video;
                          return (
                            <div className="" key={id}>
                              <iframe
                                className="my-4"
                                src={`https://www.youtube.com/embed/${key}`}
                                title={name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="" onClick={() => toggleVideos(id)}>
                        {selectedVideos.find((item) => item === id) === id && (
                          <button className="absolute z-20 bg-pink-500 top-0 text-white right-0">
                            <PlusIcon className="plusIcon" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <h1 className="text-center mt-6 text-3xl">Similar Movies</h1>
          <div className="moviesContainer mt-6">
            {similarMovies
              ?.filter((video) => video.poster_path)
              .map((movie) => {
                return (
                  <Movie
                    movie={movie}
                    image={imageUrl}
                    key={movie.id}
                    api={api}
                  />
                );
              })}
          </div>
        </div>
      )}
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
