import { PlusIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

function Videos({ videos, id }) {
  const [selectedVideos, setSelectedVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedVideos]);

  const toggleVideos = (id) => {
    setSelectedVideos((prev) => {
      if (prev.includes(id)) {
        return prev.filter((select) => select !== id);
      }
      return [...prev, id];
    });
  };
  return (
    <>
      {videos.length >= 1 && (
        <button className="videosButton" onClick={() => toggleVideos(id)}>
          {selectedVideos.find((item) => item === id) !== id && (
            <div className="buttonContent">
              <h1>Videos</h1>
              <PlusIcon className="h-7" />
            </div>
          )}
        </button>
      )}

      {selectedVideos.find((item) => item === id) === id && (
        <div className="castAndVideosContainer">
          <div className="relative">
            <h1 className="castAndVideosTitle">Videos</h1>
            <div className="castAndVideosGrid">
              {videos?.map((video) => {
                const { key, name, id } = video;
                return (
                  <div className="" key={id}>
                    <iframe
                      className="my-4"
                      src={`https://www.youtube.com/embed/${key}`}
                      title={name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              })}
            </div>
            <div className="" onClick={() => toggleVideos(id)}>
              {selectedVideos.find((item) => item === id) === id && (
                <button className="absolute z-20 bg-pink-500 top-0 text-white right-0">
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

export default Videos;
