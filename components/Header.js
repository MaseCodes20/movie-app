import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingState } from "../atoms/loading";
import { moviesState } from "../atoms/moviesState";
import { searchState } from "../atoms/searchAtom";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header({ setSearchTerm }) {
  const router = useRouter();
  const searchTerm = useRecoilValue(searchState);
  const [movies, setMovies] = useRecoilState(moviesState);

  const getMoviesData = async () => {
    try {
      const response = await fetch(`/api/search?searchTerm=${searchTerm}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((movies) => {
          setMovies(movies.data);
        });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, [searchTerm]);

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
