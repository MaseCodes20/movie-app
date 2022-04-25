import React from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../../atoms/searchAtom";
import useFetchMovies from "../../hooks/useFetchMovies";
import Movie from "../Movie";

function SearchMovies({ image, api, setSearchTerm }) {
  const searchTerm = useRecoilValue(searchState);
  const { movies } = useFetchMovies(
    `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${searchTerm}&include_adult=false`
  );

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
          return <Movie movie={movie} image={image} key={movie.id} api={api} />;
        })}
    </div>
  );
}

export default SearchMovies;
