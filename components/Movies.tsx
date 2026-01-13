import React from "react";
import Movie from "./Movie";
import { MovieT } from "../types";

type MoviesProps = {
  movies: MovieT[]
  image: string
}

function Movies({ movies, image }: MoviesProps) {

  console.log({
    movies,
    image
  })
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
