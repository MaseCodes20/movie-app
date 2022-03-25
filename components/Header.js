import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

function Header() {
  const router = useRouter();
  return (
    <div className="flex items-center sticky top-0 h-10 z-10 bg-white">
      <div onClick={() => router.push("/")} className="cursor-pointer ml-6">
        <h1>Movie App</h1>
      </div>
      <div className="flex-1">
        <WebMenu />
      </div>
      <MobileMenu />
    </div>
  );
}

export default Header;
