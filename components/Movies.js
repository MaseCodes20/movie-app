import React from "react";
import Movie from "./Movie";

function Movies({ movies, image }) {
  return (
    <div className="moviesContainer">
      {movies
        ?.filter((video) => video.poster_path)
        .map((movie) => {
          return <Movie movie={movie} image={image} key={movie.id} />;
        })}
    </div>
  );
}

export default Movies;
