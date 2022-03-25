import React, { useEffect, useState } from "react";

function useFetchVideos(url) {
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);

  useEffect(() => {
    setLoadingVideos(true);
    const fetchvideos = async () => {
      try {
        const request = await fetch(url);
        const response = await request.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    fetchvideos()
      .then((video) => setVideos(video.results))
      .finally(() => setLoadingVideos(false));
  }, [url]);

  return { videos, loadingVideos };
}

export default useFetchVideos;
