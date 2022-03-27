import React from "react";
import Movie from "./Movie";

function Movies({ movies, image, api }) {
  return (
    <div className="moviesContainer">
      {movies.map((movie) => {
        return <Movie movie={movie} image={image} key={movie.id} api={api} />;
      })}
    </div>
  );
}

export default Movies;
