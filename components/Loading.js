import { useState } from "react";
import { ClipLoader } from "react-spinners";

function Loading({ loadingMovies }) {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color={color} loading={loadingMovies} size={150} />
    </div>
  );
}

export default Loading;
