import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";

function PageNavButtons({ prevPage, nextPage, page }) {
  return (
    <div className="flex justify-center items-center my-3">
      <div
        className="flex mx-3 cursor-pointer text-white bg-blue-500 hover:bg-opacity-80 hover:text-black rounded-lg p-2"
        onClick={() => prevPage()}
      >
        <h1>PREVIOUS PAGE</h1>
        <MinusIcon className="h-7" />
      </div>
      <h1>{page}</h1>
      <div
        className="flex mx-3 cursor-pointer text-white bg-blue-500 hover:bg-opacity-80 hover:text-black rounded-lg p-2"
        onClick={() => nextPage()}
      >
        <h1>NEXT PAGE</h1>
        <PlusIcon className="h-7" />
      </div>
    </div>
  );
}

export default PageNavButtons;
