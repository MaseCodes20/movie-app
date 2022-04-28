import React from "react";
import { useRecoilValue } from "recoil";
import { moviesState } from "../../atoms/moviesAtom";
import { searchState } from "../../atoms/searchAtom";
import Movie from "../Movie";

function SearchMovies({ image }) {
  const searchTerm = useRecoilValue(searchState);
  const movies = useRecoilValue(moviesState);

  return (
    <div className="moviesContainer">
      {movies
        ?.filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .filter((video) => video.poster_path)
        .map((movie) => {
          return <Movie movie={movie} image={image} key={movie.id} />;
        })}
    </div>
  );
}

export default SearchMovies;
