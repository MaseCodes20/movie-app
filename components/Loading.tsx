import { useState } from "react";
import { PacmanLoader } from "react-spinners";

type LoadingProps = {
  loadingMovies: boolean
}

function Loading({ loadingMovies }: LoadingProps) {
  const [color,_] = useState("#ffffff");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <PacmanLoader color={color} loading={loadingMovies} size={25} />
    </div>
  );
}

export default Loading;
