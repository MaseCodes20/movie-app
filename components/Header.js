import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { moviesState } from "../atoms/moviesState";
import { searchState } from "../atoms/searchAtom";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header({ setSearchTerm }) {
  const router = useRouter();
  const searchTerm = useRecoilValue(searchState);
  const [movies, setMovies] = useRecoilState(moviesState);

  const getMoviesData = async () => {
    await fetch(`/api/search?searchTerm=${searchTerm}`, {
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMoviesData();
  };
  return (
    <nav className="headerContainer">
      <button
        onClick={() => router.push("/")}
        className="ml-3 md:text-xl w-fit font-bold"
      >
        <h1>Movie App</h1>
      </button>
      <div className="flex flex-1 mx-auto justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by title..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="searchInput"
          />
        </form>
      </div>
      <WebMenu />
      <MobileMenu />
    </nav>
  );
}

export default Header;
