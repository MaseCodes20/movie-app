import React from "react";
import useFetchVideos from "../hooks/useFetchVideos";

function Movie({ movie, image, api }) {
  const { videos, loadingVideos } = useFetchVideos(
    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api}&language=en-US`
  );
  // console.log(videos);
  return (
    <div className="mx-auto">
      <div className="relative w-fit">
        <img src={`${image}${movie.poster_path}`} alt={movie.title} />

        <div className="absolute opacity-0 hover:opacity-90 bottom-0 top-0 right-0 left-0 bg-pink-500 text-white">
          <div className="w-full text-white text-center text-3xl uppercase font-bold">
            <h1>{movie.title}</h1>
          </div>
          <p className="centered xl:text-sm text-center">{movie.overview}</p>
        </div>
        <div className="absolute bottom-0 right-0 mb-3 mr-3">
          <div className="relative h-10 w-10 bg-pink-500 rounded-full">
            <p className="centered text-center text-white font-semibold">
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
