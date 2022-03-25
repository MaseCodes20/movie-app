import { useState } from "react";
import useFetchVideos from "../hooks/useFetchVideos";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

function Movie({ movie, image, api }) {
  const [selected, setSelected] = useState([]);
  const { videos, loadingVideos } = useFetchVideos(
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

          <div className="trailerButton" onClick={() => toggle(id)}>
            {selected.find((item) => item === id) !== id ? (
              <div className="trailerButtonItems">
                <h1>Trailer</h1>
                <PlusIcon className="h-7" />
              </div>
            ) : (
              <div className="trailerButtonItems">
                <h1>Trailer</h1>
                <MinusIcon className="h-7" />
              </div>
            )}
          </div>

          {videos?.map((video) => {
            return (
              <div className="centered z-10" key={video.id}>
                {selected.find((item) => item === id) === id && (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
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
