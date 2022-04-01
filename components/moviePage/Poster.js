import React from "react";

function Poster({ imageUrl, poster_path, title }) {
  return (
    <>
      <img
        src={`${imageUrl}${poster_path}`}
        alt={title}
        className="max-h-screen mx-auto lg:mx-0"
      />
    </>
  );
}

export default Poster;
