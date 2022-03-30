import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header({ setSearchTerm }) {
  const router = useRouter();
  return (
    <nav className="headerContainer">
      <button
        onClick={() => router.push("/")}
        className="ml-3 md:text-xl w-fit font-bold"
      >
        <h1>Movie App</h1>
      </button>
      <div className="flex flex-1 mx-auto justify-center">
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
    </nav>
  );
}

export default Header;
