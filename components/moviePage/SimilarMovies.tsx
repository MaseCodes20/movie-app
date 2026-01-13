import { MovieSimilarMovies } from "../../types";
import Movie from "../Movie";

type SimilarMoviesProps = {
  similarMovies: MovieSimilarMovies[]
  image: string
}

function SimilarMovies({ similarMovies, image }: SimilarMoviesProps) {
  return (
    <>
      <h1 className="text-center mt-6 text-3xl">Similar Movies</h1>
      <div className="moviesContainer mt-6">
        {similarMovies
          ?.filter((video) => video.poster_path)
          .map((movie) => {
            return <Movie movie={movie} image={image} key={movie.id} />;
          })}
      </div>
    </>
  );
}

export default SimilarMovies;
