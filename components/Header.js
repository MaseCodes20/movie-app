import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header({ setSearchTerm }) {
  const router = useRouter();
  return (
    <div className="flex items-center sticky top-0 h-10 z-10 bg-white">
      <div onClick={() => router.push("/")} className="cursor-pointer ml-6">
        <h1>Movie App</h1>
      </div>
      <div className="flex-1 bg-slate-400">
        <input
          type="text"
          placeholder="Search by title"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className=""
        />
      </div>
      <WebMenu />
      <MobileMenu />
    </div>
  );
}

export default Header;
