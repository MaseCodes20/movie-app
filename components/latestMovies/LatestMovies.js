import React from "react";
import Movie from "../Movie";

function LatestMovies({ movies, image, api, searchTerm }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {movies
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((movie) => {
          return <Movie movie={movie} image={image} key={movie.id} api={api} />;
        })}
    </div>
  );
}

export default LatestMovies;
