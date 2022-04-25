import { useState } from "react";
import { ClipLoader, PacmanLoader } from "react-spinners";

function Loading({ loadingMovies }) {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <PacmanLoader color={color} loading={loadingMovies} size={25} />
    </div>
  );
}

export default Loading;
