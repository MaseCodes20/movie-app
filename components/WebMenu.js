import { useRouter } from "next/router";
import React from "react";

function WebMenu() {
  const router = useRouter();
  return (
    <div className="hidden md:flex justify-center items-center uppercase font-bold">
      <h1
        onClick={() => router.push("/latest")}
        className="mx-2 cursor-pointer"
      >
        Latest
      </h1>
      <h1
        onClick={() => router.push("/upcoming")}
        className="mx-2 cursor-pointer"
      >
        Upcoming
      </h1>
      <h1
        onClick={() => router.push("/popular")}
        className="mx-2 cursor-pointer"
      >
        popular
      </h1>
      <h1
        onClick={() => router.push("/toprated")}
        className="mx-2 cursor-pointer"
      >
        Top rated
      </h1>
    </div>
  );
}

export default WebMenu;
