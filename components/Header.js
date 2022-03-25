import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header({ setSearchTerm }) {
  const router = useRouter();
  return (
    <div className="headerContainer">
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer ml-6 text-xl font-bold"
      >
        <h1>Movie App</h1>
      </div>
      <div className="flex flex-1 justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="searchInput"
        />
      </div>
      <WebMenu />
      <MobileMenu />
    </div>
  );
}

export default Header;
