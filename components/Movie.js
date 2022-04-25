import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";

function Movie({ movie, image }) {
  const [serchTerm, setSearchTerm] = useRecoilState(searchState);
  const router = useRouter();

  const enterMovie = () => {
    router.push(`/movie/${movie.id}`);
    setSearchTerm("");
  };

  const roundToTenth = (num) => {
    return Math.round(num * 10) / 10;
  };

  const { title, poster_path, overview, vote_average, id } = movie;

  return (
    <div className="mx-auto">
      <div className="relative w-fit">
        <img src={`${image}${poster_path}`} alt={title} />

        <div className="moviePosterOverlay">
          <div className="movieTitle">
            <h1>{title}</h1>
          </div>
          <p className="centered xl:text-sm text-center">{overview}</p>

          <button
            className="absolute bottom-0 left-1/2 right-1/2 z-10 mb-3 text-white"
            onClick={enterMovie}
          >
            <h1 className="rounded-lg bg-blue-500 p-1 w-fit uppercase">
              More info
            </h1>
          </button>
        </div>

        <div className="ratingsContainer">
          <div className="ratingsCircle">
            <p className="rating">{roundToTenth(vote_average)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
