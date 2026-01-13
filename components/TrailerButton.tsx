import { PlusIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedState } from "../atoms/selectedAtom";

type TrailerButtonProps = {
  id: number
}

function TrailerButton({ id }: TrailerButtonProps) {
  const [selected, setSelected] = useRecoilState(selectedState);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getTrailers = async () => {
      try {
        const response = await fetch(`/api/trailer?id=${id}`, {
          signal: abortController.signal,
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            setTrailers(response.data);
          });

        return response;
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    getTrailers();

    return () => {
      abortController.abort();
    };
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
