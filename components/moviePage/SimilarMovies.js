import React from "react";
import Movie from "../Movie";

function SimilarMovies({ similarMovies, image, api }) {
  return (
    <>
      <h1 className="text-center mt-6 text-3xl">Similar Movies</h1>
      <div className="moviesContainer mt-6">
        {similarMovies
          ?.filter((video) => video.poster_path)
          .map((movie) => {
            return (
              <Movie movie={movie} image={image} key={movie.id} api={api} />
            );
          })}
      </div>
    </>
  );
}

export default SimilarMovies;
