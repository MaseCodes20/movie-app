import { PlusIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { MovieCredits } from "../../types";

type CastProps = {
  id: string,
  credits: MovieCredits[]
}

function Cast({ id, credits }: CastProps) {
  const [selectedCast, setSelectedCast] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCast]);

  const toggleCast = (id) => {
    setSelectedCast((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <>
      <button className="castButton" onClick={() => toggleCast(id)}>
        {selectedCast.find((item) => item === id) !== id && (
          <div className="buttonContent">
            <h1>Cast</h1>
            <PlusIcon className="h-7" />
          </div>
        )}
      </button>

      {selectedCast.find((item) => item === id) === id && (
        <div className="castAndVideosContainer">
          <div className="relative">
            <h1 className="castAndVideosTitle">Cast</h1>
            <div className="castAndVideosGrid">
              {credits?.map((cast) => {
                const { character, name, cast_id } = cast;
                return (
                  <div className="flex" key={cast_id}>
                    <p className="dataText">{character}:</p>
                    <p>{name}</p>
                  </div>
                );
              })}
            </div>
            <div className="" onClick={() => toggleCast(id)}>
              {selectedCast.find((item) => item === id) === id && (
                <button className="absolute z-20 bg-blue-500 top-0 text-white right-0">
                  <PlusIcon className="plusIcon" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cast;
