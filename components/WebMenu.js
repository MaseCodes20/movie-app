import { useRouter } from "next/router";
import React from "react";

function WebMenu() {
  const router = useRouter();
  return (
    <div className="hidden md:flex justify-center items-center uppercase font-bold">
      <h1 onClick={() => router.push("/latest")} className="webMenuItems">
        Latest
      </h1>
      <h1 onClick={() => router.push("/upcoming")} className="webMenuItems">
        Upcoming
      </h1>
      <h1 onClick={() => router.push("/popular")} className="webMenuItems">
        popular
      </h1>
      <h1 onClick={() => router.push("/toprated")} className="webMenuItems">
        Top rated
      </h1>
    </div>
  );
}

export default WebMenu;
