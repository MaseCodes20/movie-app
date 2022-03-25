import React from "react";
import { useState } from "react";
import Movie from "../Movie";

function PopularMovies({ popularMovies, image, api }) {
  const [show, setShow] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {popularMovies.map((movie) => {
        return <Movie movie={movie} image={image} key={movie.id} api={api} />;
      })}
    </div>
  );
}

export default PopularMovies;
