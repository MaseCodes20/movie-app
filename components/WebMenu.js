import { useRouter } from "next/router";
import React from "react";

function WebMenu() {
  const router = useRouter();
  return (
    <nav className="webMenuContainer">
      <button onClick={() => router.push("/latest")} className="webMenuItems">
        Latest
      </button>
      <button onClick={() => router.push("/upcoming")} className="webMenuItems">
        Upcoming
      </button>
      <button onClick={() => router.push("/popular")} className="webMenuItems">
        popular
      </button>
      <button onClick={() => router.push("/toprated")} className="webMenuItems">
        Top rated
      </button>
    </nav>
  );
}

export default WebMenu;
