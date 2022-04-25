import { PlusIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loadingState } from "../atoms/loading";
import { selectedState } from "../atoms/selectedAtom";

function TrailerButton({ id }) {
  const [selected, setSelected] = useRecoilState(selectedState);
  const [loading, setLoading] = useRecoilState(loadingState);

  const [trailers, setTrailers] = useState([]);

  const getTrailers = async () => {
    try {
      const response = await fetch(`/api/trailer?id=${id}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setTrailers(response.data);
          setLoading(false);
        });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrailers();
  }, []);

  const toggle = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };
  return (
    <>
      {trailers.length > 0 && (
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
        </>
      )}

      {trailers
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
