import React from "react";
import Movie from "../Movie";

function TopRatedMovies({ topRatedMovies, image, api }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {topRatedMovies.map((movie) => {
        return <Movie movie={movie} image={image} key={movie.id} api={api} />;
      })}
    </div>
  );
}

export default TopRatedMovies;
