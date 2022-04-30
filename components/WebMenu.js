import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { pageState } from "../atoms/pageAtom";

function WebMenu() {
  const [page, setPage] = useRecoilState(pageState);
  const router = useRouter();
  return (
    <nav className="webMenuContainer">
      <button
        onClick={() => {
          router.push("/latest");
          setPage(1);
        }}
        className="webMenuItems"
        aria-label="Latest page button"
      >
        Latest
      </button>
      <button
        onClick={() => {
          router.push("/upcoming");
          setPage(1);
        }}
        className="webMenuItems"
        aria-label="Upcoming page button"
      >
        Upcoming
      </button>
      <button
        onClick={() => {
          router.push("/popular");
          setPage(1);
        }}
        className="webMenuItems"
        aria-label="Popular page button"
      >
        popular
      </button>
      <button
        onClick={() => {
          router.push("/toprated");
          setPage(1);
        }}
        className="webMenuItems"
        aria-label="Toprated page button"
      >
        Top rated
      </button>
    </nav>
  );
}

export default WebMenu;
