import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieIdState } from "../atoms/movieIdAtom";
import { selectedState } from "../atoms/selectedAtom";
import useFetchMovies from "../hooks/useFetchMovies";

function TrailerButton({ id, api }) {
  const [selected, setSelected] = useRecoilState(selectedState);
  const movieId = useRecoilValue(movieIdState);

  const { movies: videos } = useFetchMovies(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api}&language=en-US`
  );

  const toggle = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };
  console.log(selected);
  return (
    <>
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

      {videos
        ?.filter((movie) => movie.type === "Trailer")
        .map((video) => {
          const { key, name } = video;
          return (
            <div className="centered z-20" key={video.id}>
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
    </>
  );
}

export default TrailerButton;

export async function getServerSideProps(context) {
  const api = process.env.TMDB_KEY;

  console.log(context);
  return {
    props: {
      api,
    },
  };
}
