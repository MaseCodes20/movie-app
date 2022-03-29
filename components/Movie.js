import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import useFetchMovies from "../hooks/useFetchMovies";
import { useRouter } from "next/router";

function Movie({ movie, image, api }) {
  const [selected, setSelected] = useState([]);
  const router = useRouter();
  const { movies: videos } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api}&language=en-US`
  );

  const toggle = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };

  const enterMovie = () => {
    router.push(`/movie/${movie.id}`);
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
          <button className="trailerButton" onClick={() => toggle(id)}>
            {selected.find((item) => item === id) !== id ? (
              <div className="trailerButtonItems">
                <h1>Trailer</h1>
                <PlusIcon className="h-7" />
              </div>
            ) : (
              <div className="trailerButtonItems">
                <h1>Trailer</h1>
                <PlusIcon className="h-7 rotate-45" />
              </div>
            )}
          </button>

          {videos?.map((video) => {
            const { key, name, id } = video;
            return (
              <div className="centered z-10" key={id}>
                {selected.find((item) => item === id) === id && (
                  <iframe
                    className="w-full"
                    src={`https://www.youtube.com/embed/${key}`}
                    title={name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            );
          })}
        </div>

        <div className="ratingsContainer">
          <div className="ratingsCircle">
            <p className="rating">{vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
